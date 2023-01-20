import { useEffect, useState } from "react"
import { boardService } from "../services/board.service.local"
import { GrFormClose } from "react-icons/gr"
import { groupService } from "../services/group.service.local"
import { useSelector } from "react-redux"
import { setFilter } from "../store/system.actions"

export function FilterModal({ onToggleFilterModal }) {

    const filter = useSelector((storeState) => storeState.systemModule.filter)
    const [filterToEdit, setFilterToEdit] = useState(filter)
   

    useEffect(() => {
        setFilter(filterToEdit)
    }, [filterToEdit])

    function hanleChange({ target }) {
        const { value, name: field } = target
        setFilterToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    return (
        <div className="filter-modal">
            <div className="modal-header">
                <span>Filter</span>
                <button className="btn-close-modal" onClick={onToggleFilterModal}><GrFormClose /></button>
            </div>
            <hr />
            <form action="">
                <label htmlFor="keyword">Keyword</label>
                <input type="text"
                    id="keyword"
                    name="keyword"
                    placeholder="Enter a keyword..."
                    value={filterToEdit?.keyword}
                    onChange={hanleChange} />
            </form>
        </div>
    )
}