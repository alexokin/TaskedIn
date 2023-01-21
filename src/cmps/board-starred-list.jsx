import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { boardService } from "../services/board.service.local"
import { useNavigate } from "react-router"


export function BoardStarredList({ modalLoc }) {

    const boards = useSelector((storeState) => storeState.boardModule.boards)
    const [starredBoards, setStarredBoards] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const starredBoardsToSet = boards.filter(board => board.isStarred)
        setStarredBoards(starredBoardsToSet)
    }, [boards])

    function onToggleStar(ev, boardId) {
        ev.stopPropagation()
        boardService.toggleStar(boardId)
    }

    function onBoardSelect(boardId) {
        navigate(`/board/${boardId}`)
    }

    return (
        <ul style={modalLoc} className="board-starred-list">
            {starredBoards && starredBoards.map(board => {
                return (
                    <li onClick={() => onBoardSelect(board._id)} key={board._id}>
                        <div className="board-display" style={board.style}></div>
                        <div className="board-title">{board.title}</div>
                        <div onClick={(event) => onToggleStar(event, board._id)} className='btn-star'>
                            <div className="filled-star"><AiFillStar /></div>
                            <div className="outline-star"><AiOutlineStar /></div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )

}