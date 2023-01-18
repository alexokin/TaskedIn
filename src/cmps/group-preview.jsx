import React from 'react'
import { AddTask } from './addtask.jsx';
import { GroupTitle } from './group-title.jsx';
import { TaskList } from "./task-list.jsx";

export function GroupPreview({group}) {
  

  return (
    <div className='group-preview'>
      <GroupTitle group={group} />
      <TaskList />
      <button className='add-task-btn'>Add a card</button>
    </div>
  )
}
