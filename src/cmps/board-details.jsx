import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { boardService } from '../services/board.service.local.js'
import { showErrorMsg } from '../services/event-bus.service.js'
import { groupService } from '../services/group.service.local.js'
import { BoardHeader } from './board-header.jsx'
import { BoardNavBar } from './board-navbar.jsx'
import { GroupList } from './group-list.jsx'
import { SideNavBar } from './side-nav-bar.jsx'

export function BoardDetails() {
  const [board, setBoard] = useState(null)
  const { boardId } = useParams()

  useEffect(() => {
    ; (async () => {
      try {
        const boardToSet = await boardService.getById(boardId)
        setBoard(boardToSet)
      } catch (err) {
        showErrorMsg('Cannot load board', err)
      }
    })()
  }, [])

  async function onAddGroup() {
    let group = groupService.getEmptyGroup()
    try {
      group.title = prompt('Group title?')
      group = await groupService.save(boardId, group)
      board.groups.push(group)
      setBoard(prevBoard => ({ ...prevBoard }))
    } catch (err) {
      showErrorMsg('Cannot save group', err)
    }
  }

  async function onRemoveGroup(groupId) {
    try {
      await groupService.remove(boardId, groupId)
      board.groups = board.groups.filter(group => group._id !== groupId)
      setBoard(prevBoard => ({ ...prevBoard }))
    } catch (err) {
      showErrorMsg('Cannot remove group', err)
    }
  }


  
  return (
    <div style={board?.style} className='board-details'>
      <BoardNavBar />
      <BoardHeader />
      <SideNavBar />
      <button onClick={onAddGroup}>Add group</button>
      {board && <GroupList setBoard={setBoard} board={board} groups={board.groups} onRemoveGroup={onRemoveGroup} />}
    </div>
  )
}
