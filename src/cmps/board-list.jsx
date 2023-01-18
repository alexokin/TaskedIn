import React from "react";
import { BoardPreview } from "./board-preview.jsx";
import {  useNavigate } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { boardService } from "../services/borad.service.local.js";
import { updateBoard } from "../store/board.actions.js";

export function BoardList({ boards, onToggleAddBoardModal }) {
  const navigate = useNavigate()

  async function onStarredChange(ev, boardId) {
    ev.stopPropagation()
    try {
      const board = await boardService.getById(boardId)
      board.isStarred = !board.isStarred
      await updateBoard(board)
    } catch (error) {
      console.log('Cannot change borad starred status')
    }
  }

  function onBoardSelect(boardId) {
    navigate(`/board/${boardId}`)
  }

  return (
    <ul className="board-list">
      <li className="btn-board-add" onClick={onToggleAddBoardModal}><span>Create new board</span></li>
      {boards.map(board => {
        return (
          <li onClick={() => onBoardSelect(board._id)} key={board._id}>
            <BoardPreview board={board} />
            <button onClick={(event) => onStarredChange(event, board._id)} className={`btn-starred ${board.isStarred ? 'starred' : ''}`}>{board.isStarred ? <AiFillStar /> : <AiOutlineStar />}</button>
          </li>
        )
      })}
    </ul>
  )
}
