import React from 'react'
import { GroupTitle } from './group-title.jsx';
import { TaskList } from "./task-list.jsx";

export function GroupPreview() {
  return (
    <div className='group-preview'>
      <GroupTitle />
      <TaskList />
      <button className='add-task-btn'>Add a card</button>
    </div>
  )
}
