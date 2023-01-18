import { useState } from "react"
import { boardService } from "../services/borad.service.local"
import { addBoard } from "../store/board.actions"
import { GrFormClose } from "react-icons/gr";


export function BoardAdd({ onToggleAddBoardModal,addModalLoc }) {
    const [boardToAdd, setBoardToAdd] = useState(boardService.getEmptyBoard())

    function handleChange({ target }) {
        const { value, name: field } = target
        setBoardToAdd(prevBoard => ({ ...prevBoard, [field]: value }))
    }

    function onStyleChange(style) {
        setBoardToAdd(prevBoard => ({ ...prevBoard, style }))
    }

    async function onAddBoard(ev) {
        ev.preventDefault()
        try {
            await addBoard(boardToAdd)
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div style={addModalLoc} className="board-add">
            <h3>Create board</h3>
            <hr />
            <div className="board-preview-img" style={boardToAdd?.style}></div>
            <span>Background</span>
            <div className="styles">
                {boardService.boardStyles.map((style, idx) => {
                    return (
                        <div onClick={() => onStyleChange(style)}
                            key={style.backgroundColor}
                            className={`style-item item${idx + 1}`}
                            style={style}>
                        </div>
                    )
                })}
            </div>

            <form onSubmit={onAddBoard}>
                <label htmlFor="title">Board title<span style={{ color: ' red' }}>*</span></label>
                <input className={`input-title ${!boardToAdd.title ? 'empty' : ''}`} type="text"
                    id="title"
                    name="title"
                    value={boardToAdd.title}
                    onChange={handleChange}
                    required />
                {!boardToAdd.title && <div>👋 Board title is required</div>}
                <button className="btn-create" disabled={boardToAdd.title === ''} >Create</button>
            </form>
            <button className="btn-close" onClick={onToggleAddBoardModal}><GrFormClose /></button>
        </div>
    )
}