import React, { useEffect, useState } from "react";
import { BoardList } from "../cmps/board-list.jsx";
import { BoardFilter } from "../cmps/board-filter.jsx";
import { boardService } from "../services/borad.service.local.js";
import { BoardAdd } from "../cmps/board-add.jsx";
import { loadBoards } from "../store/board.actions.js";
import { useSelector } from "react-redux";


export function Workspace() {
  const boards = useSelector((storeState) => storeState.boardModule.boards)
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false)

  useEffect(() => {
    ; (async () => {
      try {
        await loadBoards()
      } catch (error) {
        console.log('Cannot load boards')
      }
    })()
  },[])

  function onToggleAddBoardModal() {
    setIsBoardModalOpen(prevState => !prevState)
  }

  return (
    <div className="board-index">
      <BoardFilter />
      {isBoardModalOpen && <BoardAdd onToggleAddBoardModal={onToggleAddBoardModal} />}
      {boards && <BoardList boards={boards} onToggleAddBoardModal={onToggleAddBoardModal} />}
    </div>
  );
}
