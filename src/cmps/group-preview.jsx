import React from 'react'
import { AddTask } from './addtask.jsx';
import { GroupTitle } from './group-title.jsx';
import { TaskList } from "./task-list.jsx";

export function GroupPreview({group}) {
  

  return (
    <div className='group-preview'>
      <GroupTitle />
      <TaskList groupId={group.id}/>
      <AddTask />
    </div>
  )
}
