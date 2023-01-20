import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { boardService } from "../services/board.service.local";
import { IoFilterSharp } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";

export function BoardHeader({ board }) {

  function onToggleStar() {
    boardService.toggleStar(board._id)
  }

  return (
    <div className="board-header">
      <span className="board-title">{board.title}</span>
      <button onClick={onToggleStar} className={`btn-star ${board.isStarred ? 'starred' : ''}`}>{board.isStarred ? <AiFillStar /> : <AiOutlineStar />}</button>
      <button className="btn-filter"><IoFilterSharp /> Filter</button>
      <div className="members-container"></div>
      <button className="btn-menu"><HiDotsHorizontal /></button>
    </div>
  )
}
