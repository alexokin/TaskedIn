import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineLeft } from "react-icons/ai";
import { MainHeaderColorPicker } from "./main-header-color-picker";
import { FiPlus } from "react-icons/fi";
import { BoardColorPicker } from "./board-color-picker";
import { BoardImgPicker } from "./board-img-picker";
import { uploadService } from "../services/upload.service";
import { updateBoard } from "../store/board.actions";

export function SideMenu({ board, isSideMenuOpen, setIsSideMenuOpen }) {
    const [isHeaderColorPickerOpen, setIsHeaderColorPickerOpen] = useState(false)
    const [isBgColorPickerOpen, setIsBgColorPickerOpen] = useState(false)
    const [isBgColorPickerMenuOpen, setIsBgColorPickerMenuOpen] = useState(false)
    const [isBgImgPickerMenuOpen, setIsBgImgPickerMenuOpen] = useState(false)
    const [title, setTitle] = useState('Menu')
    const [isUploading, setIsUploading] = useState(false)

    function onReturn() {
        if (isBgColorPickerMenuOpen || isBgImgPickerMenuOpen) {
            setIsBgColorPickerMenuOpen(false)
            setIsBgImgPickerMenuOpen(false)
            setIsBgColorPickerOpen(true)
        } else {
            setIsHeaderColorPickerOpen(false)
            setIsBgColorPickerOpen(false)
        }
    }

    useEffect(() => {
        if (!isHeaderColorPickerOpen && !isBgColorPickerOpen && !isBgColorPickerMenuOpen && !isBgImgPickerMenuOpen) setTitle('Menu')
        if (isHeaderColorPickerOpen) setTitle('Header colors')
        if (isBgColorPickerOpen) setTitle('Change background')
        if (isBgColorPickerMenuOpen) setTitle('board colors')

    }, [isHeaderColorPickerOpen, isBgColorPickerOpen, isBgColorPickerMenuOpen, isBgImgPickerMenuOpen])

    async function uploadImg(ev) {
        setIsUploading(true)
        const { secure_url } = await uploadService.uploadImg(ev)
        let boardToSet = JSON.parse(JSON.stringify(board))
        boardToSet.style = {
            backgroundImage: `url('${secure_url}')`,
            backgroundSize: 'cover',
        }
        setIsUploading(false)
        updateBoard(boardToSet)
    }

    return (
        <section className={`side-menu ${isSideMenuOpen ? 'open' : ''}`}>
            <div className="side-menu-header">
                {!isBgImgPickerMenuOpen && <span className="title">{title}</span>}
                {isBgImgPickerMenuOpen && <span className="title">Photos by <a href={`https://unsplash.com`} target="_blank">Unsplash</a></span>}
                <button onClick={() => setIsSideMenuOpen(false)} className="btn-close-menu"><AiOutlineClose /></button>
                {(isHeaderColorPickerOpen || isBgColorPickerOpen || isBgImgPickerMenuOpen) && <button onClick={onReturn} className="btn-return-menu"><AiOutlineLeft /></button>}
            </div>
            <hr />
            <div className="menu-content">
                {!(isHeaderColorPickerOpen || isBgColorPickerOpen || isBgImgPickerMenuOpen) && <div className="btn-background" onClick={() => setIsBgColorPickerOpen(true)}>
                    <div style={board.style} className="preview"></div>
                    <span>Change background</span>
                </div>}
                {!(isHeaderColorPickerOpen || isBgColorPickerOpen || isBgImgPickerMenuOpen) && <div className="btn-header" onClick={() => setIsHeaderColorPickerOpen(true)}>
                    <div style={board.headerStyle} className="preview" ></div>
                    <span>Change header</span>
                </div>}

                <div className={`bg-change-menu ${isBgColorPickerOpen && !isBgColorPickerMenuOpen ? 'open' : ''}`}>
                    <div className="set-pickers">
                        <div className="bg-photos">
                            <img src={require(`../assets/img/bg-photos.png`)} onClick={() => { setIsBgImgPickerMenuOpen(true); setIsBgColorPickerOpen(false) }} />
                            <span>Photos</span>
                        </div>
                        <div className="bg-colors">
                            <img src={require(`../assets/img/bg-colors.png`)} onClick={() => setIsBgColorPickerMenuOpen(true)} />
                            <span>Colors</span>
                        </div>
                    </div>
                    <hr />
                    <div className="custom-picker">
                        <span>Custom</span>
                        {!isUploading && <label className="btn-custom" ><FiPlus />
                            <input type="file" onChange={uploadImg} accept="img/*" className="img-upload" />
                        </label>}
                        {isUploading && <span>loading...</span>}
                    </div>
                </div>
                <BoardImgPicker board={board} isBgImgPickerMenuOpen={isBgImgPickerMenuOpen} />
                <MainHeaderColorPicker board={board} isHeaderColorPickerOpen={isHeaderColorPickerOpen} />
                <BoardColorPicker board={board} isBgColorPickerMenuOpen={isBgColorPickerMenuOpen} />
            </div>
        </section>
    )
}