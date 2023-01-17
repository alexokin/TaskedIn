import React from "react";
import { BoardList } from "../cmps/board-list.jsx";


export function BoardIndex() {
  return (
    <div className="board-index">
      <button>Add Board</button>
      <BoardList />
    </div>
  );
}
