import React from 'react'
import { TaskPreview } from "./task-preview.jsx";

export function TaskList() {
  return (
    <div className='task-list'>
        <TaskPreview />
        <TaskPreview />
        <TaskPreview />
        <TaskPreview />
        <TaskPreview />
        <TaskPreview />
    </div>
  )
}
