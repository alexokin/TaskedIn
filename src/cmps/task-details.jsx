import React from 'react'
import { TaskDetailsActivity } from './task-details-activity.jsx'
import { TaskDetailsChecklist } from './task-details-checklist.jsx'
import { TaskDetailsInfo } from './task-details-info.jsx'
import { TaskSideBar } from './task-siderbar.jsx'


export function TaskDetails() {
  return (
    <div className='task-details'>
      <TaskDetailsInfo />
      <TaskDetailsChecklist />
      <TaskDetailsActivity />
      <TaskSideBar />
    </div>
  )
}
