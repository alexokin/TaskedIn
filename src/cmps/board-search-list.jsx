import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { BiSearch } from "react-icons/bi"

export function BoardSearchList({ modalLoc, toggleSearchList }) {

    const boards = useSelector((storeState) => storeState.boardModule.boards)
    const [boardsToDisplay, setBoardsToDisplay] = useState(null)
    const [filterbyStr, setFilterByStr] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const regex = new RegExp(filterbyStr, 'i')
        let BoardsToSet = boards.filter(board => regex.test(board.title))
        if(BoardsToSet.length > 8){
            BoardsToSet= BoardsToSet.slice(0,8)
        }
        setBoardsToDisplay(BoardsToSet)
    }, [filterbyStr])

    function onBoardSelect(boardId) {
        navigate(`/board/${boardId}`)
    }

    function handleChange({ target }) {
        setFilterByStr(target.value)
    }

    return (
        <div style={modalLoc} className="board-search-list" >

            <div className="list-header">
                <BiSearch />
                <input type="text"
                    value={filterbyStr}
                    onChange={handleChange} 
                    onBlur={toggleSearchList}
                    autoFocus/>

            </div>

            <ul className="search-list">
                {boardsToDisplay && boardsToDisplay.map(board => {
                    return (
                        <li onClick={() => onBoardSelect(board._id)} key={board._id}>
                            <div className="board-display" style={board.style}></div>
                            <div className="board-title">{board.title}</div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )

}