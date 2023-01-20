import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { showErrorMsg } from "../services/event-bus.service.js";
import { groupService } from "../services/group.service.local.js";
import { GroupList } from "./group-list.jsx";
import { FiPlus } from "react-icons/fi";
import { GroupAdd } from "./group-add.jsx";
import { useSelector } from "react-redux";
import { setBoard, updateBoard } from "../store/board.actions.js";
import { BoardNavBar } from "./board-navbar";
import { TaskDetails } from "./task-details";
import { BoardHeader } from "./board-header.jsx";

export function BoardDetails() {
  const board = useSelector((storeState) => storeState.boardModule.currBoard)
  const filter = useSelector((storeState) => storeState.systemModule.filter)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const { boardId, taskId } = useParams()
  const [groupsToDisplay, setGroupsToDisplay] = useState(null)

  useEffect(() => {
    ; (async () => {
      try {
        const groupsToSet = await groupService.query(boardId, filter)
        setGroupsToDisplay(groupsToSet)
      } catch (err) {
        showErrorMsg("Cannot load groups", err)
      }
    })()
  }, [filter])

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
        {groupsToDisplay && <GroupList board={board} groups={groupsToDisplay} />}
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
