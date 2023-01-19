import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { showErrorMsg } from '../services/event-bus.service.js'
import { groupService } from '../services/group.service.local.js'
import { GroupList } from './group-list.jsx'
import { FiPlus } from "react-icons/fi";
import { GroupAdd } from './group-add.jsx'
import { useSelector } from 'react-redux'
import { setBoard, updateBoard } from '../store/board.actions.js'
import { BoardNavBar } from "./board-navbar";
import { TaskDetails } from "./task-details";


export function BoardDetails() {
  // const [board, setBoard] = useState(null)
  const board = useSelector((storeState) => storeState.boardModule.currBoard)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [addModalLoc, setAddModalLoc] = useState(null)
  const { boardId, taskId } = useParams()

  useEffect(() => {
    ; (async () => {
      try {
        setBoard(boardId)
      } catch (err) {
        showErrorMsg('Cannot load board', err)
      }
    })()
  }, [])

  async function onRemoveGroup(groupId) {
    try {
      await groupService.remove(boardId, groupId)
      board.groups = board.groups.filter(group => group._id !== groupId)
      updateBoard(board)
    } catch (err) {
      showErrorMsg('Cannot remove group', err)
    }
  }

  function onToggleAddModal(ev) {
    const BoundingClientRect = ev?.target.getBoundingClientRect()
    const addModalLocToSet = {
      left: `${BoundingClientRect?.left}px`
    }
    setIsAddModalOpen(prevState => !prevState)
    setAddModalLoc(addModalLocToSet)
  }



  return (
    <div style={board?.style} className='board-details'>
      {/* <BoardNavBar /> */}
      {/* <BoardHeader />
      <SideNavBar /> */}
      {board && <GroupList board={board} groups={board.groups} onRemoveGroup={onRemoveGroup} />}
      <div className='btn-open-addGroup' onClick={(event) => onToggleAddModal(event)}><FiPlus />Add another list</div>
      {isAddModalOpen && <GroupAdd board={board}  onToggleAddModal={onToggleAddModal} addModalLoc={addModalLoc} />}
      {taskId && <TaskDetails />}
    </div>
  )
}
