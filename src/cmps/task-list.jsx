import React, { useState } from "react";

import { TaskPreview } from "./task-preview.jsx";
import { groupService } from "../services/group.service.local";
import { utilService } from "../services/util.service";
import { AddTask } from "./add-task.jsx";
import { taskService } from "../services/task.service.local.js";
import { addTask } from "../store/actions/task.actions";
import { FiPlus } from "react-icons/fi";

export function TaskList({ groupTasks, groupId, board }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  function onToggleAddModal() {
    setIsAddModalOpen(prevState => !prevState)
  }

  return (
    <div className="task-list">
      {groupTasks.map((task, index) => (
        <TaskPreview board={board} key={task._id} task={task} groupId={groupId} />
      ))}
      {!isAddModalOpen && <div onClick={onToggleAddModal} className="btn-open-add-task"><FiPlus />Add a card</div>}
      {isAddModalOpen && <AddTask onToggleAddModal={onToggleAddModal} tasks={groupTasks} board={board} groupId={groupId} />}
    </div>
  );
}
