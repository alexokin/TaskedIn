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
  const[addModalLoc,setAddModalLoc] = useState(null)

  useEffect(() => {
    ; (async () => {
      try {
        await loadBoards()
      } catch (error) {
        console.log('Cannot load boards')
      }
    })()
  },[])

  function onToggleAddBoardModal(ev) {
    const BoundingClientRect = ev.target.getBoundingClientRect()
    const addModalLocToSet = {
      left: `${BoundingClientRect.left+BoundingClientRect.width+5}px`
    }
    setIsBoardModalOpen(prevState => !prevState)
    setAddModalLoc(addModalLocToSet)
  }

  return (
    <div className="board-index">
      <BoardFilter />
      {isBoardModalOpen && <BoardAdd addModalLoc={addModalLoc} onToggleAddBoardModal={onToggleAddBoardModal} />}
      {boards && <BoardList boards={boards} onToggleAddBoardModal={onToggleAddBoardModal} />}
    </div>
  );
}
