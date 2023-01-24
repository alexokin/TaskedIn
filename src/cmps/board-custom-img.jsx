import { useState } from "react"
import { uploadService } from "../services/upload.service"
import { updateBoard } from "../store/board.actions"
import { FiPlus } from "react-icons/fi";
import { useEffect } from "react";
import { GrFormClose } from "react-icons/gr"
import { FastAverageColor } from 'fast-average-color'
const STORAGE_KEY = 'customBgDB'


export function BoardCustomImg({ board }) {
    const [isUploading, setIsUploading] = useState(false)
    let [imgsToDisplay, setImgsToDisplay] = useState(null)
    const [selectedImg, setSelectedImg] = useState(null)
    const getAverageColor = new FastAverageColor()

    useEffect(() => {
        ; (async () => {
            const ImgsToSet = await uploadService.getUploadedCollection(STORAGE_KEY)
            setImgsToDisplay(ImgsToSet)
        })()
    }, [])


    async function uploadImg(ev) {
        setIsUploading(true)
        const img = await uploadService.uploadImg(ev, STORAGE_KEY)
        const imgToSave = await uploadService.saveUploadedCollection(STORAGE_KEY, img)
        imgsToDisplay.push(imgToSave)
        setImgsToDisplay(prevImgs => prevImgs)
        onSetStyle(img.secure_url)
        setIsUploading(false)
    }

    async function onSetStyle(imgUrl) {
        let boardToSet = JSON.parse(JSON.stringify(board))
        boardToSet.style = {
            backgroundImage: `url('${imgUrl}')`,
            backgroundSize: 'cover',
        }
        const headerColor = await getAverageColor.getColorAsync(imgUrl)
        boardToSet.headerStyle = { backgroundColor: headerColor.rgba }
        updateBoard(boardToSet)
    }

    async function onRemoveImg() {
        await uploadService.removeFromUploadedCollection(STORAGE_KEY, selectedImg._id)
        const imgsToSet = imgsToDisplay.filter(img => img._id !== selectedImg._id)
        setImgsToDisplay(imgsToSet)
        setSelectedImg(null)
    }

    function onSetSelectedImg(ev, img) {
        ev.stopPropagation()
        setSelectedImg(img)
    }

    return (
        <section className="board-custom-img">
            <span>Custom</span>
            <div className="content">
                <div className="img-uploader">
                    {!isUploading && <label className="btn-custom" ><FiPlus />
                        <input type="file" onChange={uploadImg} accept="img/*" className="img-upload" />
                    </label>}
                    {isUploading && <div className="loader-container">
                        <img width='100px' src={require(`../assets/img/upload-loader.gif`)} />
                    </div>}
                </div>

                {imgsToDisplay && imgsToDisplay.map(img => {
                    return (
                        <div className="custom-img-item" key={img._id} onClick={() => onSetStyle(img.secure_url)}>
                            <img src={img.secure_url} />
                            <a onClick={(event) => onSetSelectedImg(event, img)}>Remove</a>

                            {selectedImg?._id === img._id && <div className="remove-modal">
                                <div className="modal-header">
                                    <span> Delete background?</span>
                                    <button className="btn-close-modal" onClick={() => setSelectedImg(null)}><GrFormClose /></button>
                                </div>
                                <hr />
                                <div className="modal-content">
                                    <p>Deleting a background is permanent. There is no undo.</p>
                                    <button className="btn-remove-bg" onClick={onRemoveImg}>Delete</button>
                                </div>

                            </div>}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}