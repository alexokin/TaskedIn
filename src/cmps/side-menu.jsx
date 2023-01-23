import { useState } from "react";
import { AiOutlineClose, AiOutlineLeft } from "react-icons/ai";
import { MainHeaderColorPicker } from "./main-header-color-picker";

export function SideMenu({ board, isSideMenuOpen, setIsSideMenuOpen }) {
    const [isHeaderColorPickerOpen, setIsHeaderColorPickerOpen] = useState(false)
    const [isBgColorPickerOpen, setIsBgColorPickerOpen] = useState(false)

    function onReturn() {
        setIsHeaderColorPickerOpen(false)
    }

    return (
        <section className={`side-menu ${isSideMenuOpen ? 'open' : ''}`}>
            <div className="side-menu-header">
                <span className="title">Menu</span>
                <button onClick={() => setIsSideMenuOpen(false)} className="btn-close-menu"><AiOutlineClose /></button>
                {(isHeaderColorPickerOpen || isBgColorPickerOpen) && <button onClick={onReturn} className="btn-return-menu"><AiOutlineLeft /></button>}
            </div>
            <hr />
            <div className="menu-content">
                {!(isHeaderColorPickerOpen || isBgColorPickerOpen) && <div className="btn-background">
                    <div style={board.style} className="preview"></div>
                    <span>Change background</span>
                </div>}
                {!(isHeaderColorPickerOpen || isBgColorPickerOpen) && <div className="btn-header" onClick={() => setIsHeaderColorPickerOpen(true)}>
                    <div style={board.headerStyle} className="preview" ></div>
                    <span>Change header</span>
                </div>}

                <MainHeaderColorPicker board={board} isHeaderColorPickerOpen={isHeaderColorPickerOpen} />
            </div>
        </section>
    )
}