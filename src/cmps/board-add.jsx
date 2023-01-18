import { useState } from "react"
import { boardService } from "../services/board.service.local"
import { addBoard } from "../store/board.actions"


export function BoardAdd({ onToggleAddBoardModal }) {
    const [boardToAdd, setBoardToAdd] = useState(boardService.getEmptyBoard())

    function handleChange({ target }) {
        const { type, value, name: field } = target
        console.log(boardToAdd)
        if (type == 'text') {
            setBoardToAdd(prevBoard => ({ ...prevBoard, [field]: value }))
        }
        if (type === 'color') {
            const styleToSet = { backgroundColor: value }
            setBoardToAdd(prevBoard => ({ ...prevBoard, [field]: styleToSet }))
        }
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
        <div className="board-add">
            <h3>Create board</h3>
            <br />
            <form onSubmit={onAddBoard}>
                <label htmlFor="style">Background</label>
                <input type="color"
                    id="style"
                    name="style"
                    onChange={handleChange} />

                <label htmlFor="title">Board title</label>
                <input type="text"
                    id="title"
                    name="title"
                    value={boardToAdd.title}
                    onChange={handleChange}
                    required />
                <button>Create</button>
            </form>
            <button onClick={onToggleAddBoardModal}>X</button>
        </div>
    )
}