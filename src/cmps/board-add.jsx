import { useState } from "react"
import { boardService } from "../services/board.service.local"
import { addBoard, setBoard } from "../store/board.actions"
import { GrFormClose } from "react-icons/gr"
import { useNavigate } from "react-router"


export function BoardAdd({ onToggleAddBoardModal, addModalLoc, fromHeader }) {
    const [boardToAdd, setBoardToAdd] = useState(boardService.getEmptyBoard())
    const navigate = useNavigate()

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
            onToggleAddBoardModal()
            const savedBoard = await addBoard(boardToAdd)
            if (fromHeader) {
                setBoard(savedBoard._id)
                navigate(`/board/${savedBoard._id}`)
            }
        } catch (err) {
            console.log(err)
        }
    }

    function handleBlur({ relatedTarget }){
        if(!relatedTarget) onToggleAddBoardModal()
      }

    return (
        <div tabIndex="0" style={addModalLoc} className="board-add" onBlur={handleBlur} >
            <h3>Create board</h3>
            <hr />

            <div className="board-preview-img" style={boardToAdd?.style}>
                <div className="board-preview-img"></div>
            </div>
            <span>Background</span>
            <div className="styles-img">
                {boardService.boardStylesImg.map((style, idx) => {
                    return (
                        <div onClick={() => onStyleChange(style)}
                            key={style.backgroundColor}
                            className={`style-img img${idx + 1}`}
                        >
                        </div>
                    )
                })}
            </div>
            <div className="styles">
                {boardService.boardStyles.slice(0,6).map((style, idx) => {
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
                    required
                    autoFocus />
                {!boardToAdd.title && <div>👋 Board title is required</div>}
                <button className="btn-create" disabled={boardToAdd.title === ''} >Create</button>
            </form>
            <button className="btn-close" onClick={onToggleAddBoardModal}><GrFormClose /></button>
        </div>
    )
}