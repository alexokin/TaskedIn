import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TaskPreview } from "./task-preview.jsx";

export function TaskList() {

  function addTask(title, ) {
    
  }
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
