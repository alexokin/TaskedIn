import React, { useEffect, useState } from "react";
import { BoardList } from "../cmps/board-list.jsx";
import { BoardFilter } from "../cmps/board-filter.jsx";
import { boardService } from "../services/board.service.local.js";
import { BoardAdd } from "../cmps/board-add.jsx";
import { loadBoards } from "../store/board.actions.js";
import { useSelector } from "react-redux";
import { AiOutlineStar } from "react-icons/ai";

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

  function getLastviewedBoards() {
    let sortedBoards = JSON.parse(JSON.stringify(boards))
    sortedBoards = sortedBoards.filter(board => board.lastViewed)
    sortedBoards.sort((board1, board2) => board2.lastViewed - board1.lastViewed)
    return sortedBoards.slice(0, 4)

  }

  return (
    <div className="workspace">
      {/* <h1>Boards</h1>
      <BoardFilter onSetFilter={onSetFilter} /> */}

      {boards.filter(board => board.isStarred).length !== 0 && <div className="starred-boards">

        <div className="starred-boards-title">
          <span className="star"><AiOutlineStar /></span>
          <span className="title">Starred boards</span>
        </div>

        <BoardList isAddable={false} boards={boards.filter(board => board.isStarred)} onToggleAddBoardModal={onToggleAddBoardModal} />

      </div>}

      <div className="recent-boards">
        <div className="recent-boards-title">
          <span className="recent-icon"><AiOutlineStar /></span>
          <span className="title">Recent boards</span>
        </div>

        <BoardList isAddable={false} boards={getLastviewedBoards()} onToggleAddBoardModal={onToggleAddBoardModal} />

      </div>
      <div className="all-boards">
        <span>YOUR BOARDS</span>
        {boards && <BoardList isAddable={true} boards={boards} onToggleAddBoardModal={onToggleAddBoardModal} />}
      </div>
      {isBoardModalOpen && <BoardAdd addModalLoc={addModalLoc} onToggleAddBoardModal={onToggleAddBoardModal} />}
    </div>
  );
}
