import React from "react";
import { BoardFilter } from "./board-filter.jsx";
import { SideMenu } from "./board-sidemenu.jsx";

export function BoardHeader() {
  return (
    <div className="board-header">
      <BoardFilter />
      <SideMenu />
    </div>
  );
}
