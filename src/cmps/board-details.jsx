import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { boardService } from '../services/board.service.local.js'
import { showErrorMsg } from '../services/event-bus.service.js'
import { groupService } from '../services/group.service.local.js'
import { BoardHeader } from './board-header.jsx'
import { BoardNavBar } from './board-navbar.jsx'
import { GroupList } from './group-list.jsx'
import { SideNavBar } from './side-nav-bar.jsx'
import { FiPlus } from "react-icons/fi";
import { GroupAdd } from './group-add.jsx'
import { useSelector } from 'react-redux'
import { setBoard, updateBoard } from '../store/board.actions.js'

export function BoardDetails() {
  const board = useSelector((storeState) => storeState.boardModule.currBoard)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [addModalLoc, setAddModalLoc] = useState(null)
  const { boardId } = useParams()

  useEffect(() => {
    ; (async () => {
      try {
        setBoard(boardId)
      } catch (err) {
        showErrorMsg('Cannot load board', err)
      }
    })()
  }, [])

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
      {/* <BoardNavBar />
      <BoardHeader />
      <SideNavBar /> */}
  { board && <GroupList board={board} groups={board.groups} /> }
  <div className='btn-open-addGroup' onClick={(event) => onToggleAddModal(event)}><FiPlus />Add another list</div>
  { isAddModalOpen && <GroupAdd board={board} onToggleAddModal={onToggleAddModal} addModalLoc={addModalLoc} /> }
    </div >
  )
}
