import React from "react";
import { BoardPreview } from "./board-preview.jsx";
import { Link } from "react-router-dom";

export function BoardList({ boards, onToggleAddBoardModal }) {
  return (
    <ul className="board-list">
      <li onClick={onToggleAddBoardModal}>Create new board</li>
      {boards.map(board => {
        return (
          <li key={board._id}>
            <Link to={`/board/${board._id}`}>
              <BoardPreview board={board} />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
