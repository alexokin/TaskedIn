import React from 'react'
import { BoardHeader } from './board-header.jsx'
import { BoardNavBar } from './board-navbar.jsx'
import { GroupList } from './group-list.jsx'
import { SideNavBar } from './side-nav-bar.jsx'

export function BoardDetails() {
  return (
    <div className='board-details'>
        <BoardNavBar />
        <BoardHeader />
        <SideNavBar />
        <GroupList />
    </div>
  )
}
