import React from "react";
import { BoardPreview } from "./board-preview.jsx";
import { useNavigate } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { boardService } from "../services/board.service.local.js";
import { removeBoard, updateBoard } from "../store/board.actions.js";

export function BoardList({ boards, onToggleAddBoardModal, isAddable }) {
  const navigate = useNavigate()

  async function onStarredChange(ev, boardId) {
    ev.stopPropagation()
    await boardService.toggleStar(boardId)
  }

  function onBoardSelect(boardId) {
    navigate(`/board/${boardId}`)
  }

  async function onRemoveBoard(ev,boardId){
    ev.stopPropagation()
    try {
      await removeBoard(boardId)
    } catch (error) {
      console.log('Cannot remove board')
    }
  }

  return (
    <ul className="board-list">
      {boards.map(board => {
        return (
          <li onClick={() => onBoardSelect(board._id)} key={board._id}>
            <BoardPreview board={board} />
            <button onClick={(event) => onStarredChange(event, board._id)} className={`btn-starred ${board.isStarred ? 'starred' : ''}`}>{board.isStarred ? <AiFillStar /> : <AiOutlineStar />}</button>
            <button onClick={(event) => onRemoveBoard(event, board._id)} className="btn-remove-board">X</button>
          </li>
        )
      })}
       {isAddable && <li className="btn-board-add" onClick={(event) => onToggleAddBoardModal(event)}>Create new board</li>}
    </ul>
  )
}
