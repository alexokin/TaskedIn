import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineLeft } from "react-icons/ai";
import { MainHeaderColorPicker } from "./main-header-color-picker";
import { BoardColorPicker } from "./board-color-picker";
import { BoardImgPicker } from "./board-img-picker";
import { BoardCustomImg } from "./board-custom-img";

export function SideMenu({ board, isSideMenuOpen, setIsSideMenuOpen }) {
    const [isBgColorPickerOpen, setIsBgColorPickerOpen] = useState(false)
    const [isBgColorPickerMenuOpen, setIsBgColorPickerMenuOpen] = useState(false)
    const [isBgImgPickerMenuOpen, setIsBgImgPickerMenuOpen] = useState(false)
    const [title, setTitle] = useState('Menu')

    function onReturn() {
        if (isBgColorPickerMenuOpen || isBgImgPickerMenuOpen) {
            setIsBgColorPickerMenuOpen(false)
            setIsBgImgPickerMenuOpen(false)
            setIsBgColorPickerOpen(true)
        } else {
            setIsBgColorPickerOpen(false)
        }
    }

    useEffect(() => {
        if (!isBgColorPickerOpen && !isBgColorPickerMenuOpen && !isBgImgPickerMenuOpen) setTitle('Menu')
        if (isBgColorPickerOpen) setTitle('Change background')
        if (isBgColorPickerMenuOpen) setTitle('board colors')

    }, [ isBgColorPickerOpen, isBgColorPickerMenuOpen, isBgImgPickerMenuOpen])

    

    return (
        <section className={`side-menu ${isSideMenuOpen ? 'open' : ''}`}>
            <div className="side-menu-header">
                {!isBgImgPickerMenuOpen && <span className="title">{title}</span>}
                {isBgImgPickerMenuOpen && <span className="title">Photos by <a href={`https://unsplash.com`} target="_blank">Unsplash</a></span>}
                <button onClick={() => setIsSideMenuOpen(false)} className="btn-close-menu"><AiOutlineClose /></button>
                {( isBgColorPickerOpen || isBgImgPickerMenuOpen) && <button onClick={onReturn} className="btn-return-menu"><AiOutlineLeft /></button>}
            </div>
            <hr />
            <div className="menu-content">
                {!( isBgColorPickerOpen || isBgImgPickerMenuOpen) && <div className="btn-background" onClick={() => setIsBgColorPickerOpen(true)}>
                    <div style={board.style} className="preview"></div>
                    <span>Change background</span>
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
                    <BoardCustomImg board={board} />
                </div>
                <BoardImgPicker board={board} isBgImgPickerMenuOpen={isBgImgPickerMenuOpen} />
                <BoardColorPicker board={board} isBgColorPickerMenuOpen={isBgColorPickerMenuOpen} />
            </div>
        </section>
    )
}