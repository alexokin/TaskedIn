import { useState } from "react"
import { groupService } from "../services/group.service.local"
import { AiOutlineClose } from "react-icons/ai";
import { showErrorMsg } from "../services/event-bus.service";


export function GroupAdd({ setBoard, board, onToggleAddModal, addModalLoc }) {
    const [groupToAdd, setGroupToAdd] = useState(groupService.getEmptyGroup())


    function onHandleChange({ target }) {
        const { value } = target
        setGroupToAdd(prevGroup => ({ ...prevGroup, title: value }))
    }

    async function onAddGroup(ev) {
        ev.preventDefault()
        try {
            const savedGroup = await groupService.save(board._id, groupToAdd)
            board.groups.push(savedGroup)
            setBoard(prevBoard => ({ ...prevBoard }))
            
        } catch (err) {
            showErrorMsg('Cannot save group', err)
        }
        finally{
            onToggleAddModal()
        }
    }

    return (
        <div className="group-add" style={addModalLoc}>
            <form onSubmit={onAddGroup}>
                <input type="text"
                    id="title"
                    name="title"
                    placeholder="Enter a title for this..."
                    value={groupToAdd?.title}
                    onChange={onHandleChange}
                    required
                    autoFocus />
                <button className="btn-add-group" type="submit">Add list</button>
                <button onClick={onToggleAddModal} className="btn-close-modal"><AiOutlineClose /></button>
            </form>
        </div>
    )
}