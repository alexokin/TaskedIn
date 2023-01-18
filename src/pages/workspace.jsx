import React from "react";
import { BoardList } from "../cmps/board-list.jsx";


export function Workspace() {
  return (
    <div className="workspace">
      <button>Add Board</button>
      <BoardList />
    </div>
  );
}
