import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showErrorMsg } from "../services/event-bus.service.js";
import { GroupList } from "./group-list.jsx";
import { FiPlus } from "react-icons/fi";
import { GroupAdd } from "./group-add.jsx";
import { useSelector } from "react-redux";
import { setBoard } from "../store/board.actions.js";
import { TaskDetails } from "./task-details";
import { BoardHeader } from "./board-header.jsx";

export function BoardDetails() {
  const board = useSelector((storeState) => storeState.boardModule.currBoard)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const { boardId, taskId } = useParams()

  useEffect(() => {
    ; (async () => {
      try {
        setBoard(boardId)
      } catch (err) {
        showErrorMsg("Cannot load board", err)
      }
    })()
  }, [])

  function onToggleAddModal() {
    setIsAddModalOpen((prevState) => !prevState)
  }

  return (
    <div style={board?.style} className="board-details">
      <BoardHeader board={board} />
      {/* <SideNavBar /> */}

      <div className="board-content">
        {board && <GroupList board={board} groups={board.groups} />}
        <div
          className="btn-open-addGroup"
          onClick={(event) => onToggleAddModal(event)}
        >
          <FiPlus />
          Add another list
        </div>
        {isAddModalOpen && (
          <GroupAdd
            board={board}
            onToggleAddModal={onToggleAddModal}
          />
        )}
      </div>

      {taskId && <TaskDetails />}
    </div>
  )
}
