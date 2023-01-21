import React, { useEffect, useState } from "react";
import { BoardList } from "../cmps/board-list.jsx";
import { BoardFilter } from "../cmps/board-filter.jsx";
import { boardService } from "../services/board.service.local.js";
import { BoardAdd } from "../cmps/board-add.jsx";
import { loadBoards } from "../store/board.actions.js";
import { useSelector } from "react-redux";


export function Workspace() {
  const boards = useSelector((storeState) => storeState.boardModule.boards)
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false)
  const [addModalLoc, setAddModalLoc] = useState(null)
  const [filterBy, setFilterBy] = useState(boardService.getDefaultFilter())

  useEffect(() => {
    ; (async () => {
      try {
        await loadBoards(filterBy)
      } catch (error) {
        console.log('Cannot load boards')
      }
    })()
  }, [filterBy])

  function onSetFilter(filterBy) {
    setFilterBy(filterBy)
  }

  function onToggleAddBoardModal(ev) {
    const BoundingClientRect = ev?.target.getBoundingClientRect()
    const addModalLocToSet = {
      left: `${BoundingClientRect?.left + BoundingClientRect?.width + 5}px`
    }
    setIsBoardModalOpen(prevState => !prevState)
    setAddModalLoc(addModalLocToSet)
  }

  return (
    <div className="workspace">
      <h1>Boards</h1>
      <BoardFilter onSetFilter={onSetFilter} />
      {isBoardModalOpen && <BoardAdd addModalLoc={addModalLoc} onToggleAddBoardModal={onToggleAddBoardModal} />}
      {boards && <BoardList boards={boards} onToggleAddBoardModal={onToggleAddBoardModal} />}
    </div>
  );
}
