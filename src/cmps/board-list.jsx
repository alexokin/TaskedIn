import React from "react";
import { BoardPreview } from "./board-preview.jsx";
import { Link } from "react-router-dom";

export function BoardList() {
  return (
    <div className="board-list">
      <Link to={`/board/:1`}>
        <BoardPreview />
      </Link>
      <Link to={`/board/:2`}>
        <BoardPreview />
      </Link>
      <Link to={`/board/:3`}>
        <BoardPreview />
      </Link>
    </div>
  );
}
