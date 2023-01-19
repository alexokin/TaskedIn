import React, { useState } from "react";

import { TaskPreview } from "./task-preview.jsx";
import { groupService } from "../services/group.service.local";
import { utilService } from "../services/util.service";
import { AddTask } from "./add-task.jsx";
import { taskService } from "../services/task.service.local.js";
import { addTask } from "../store/actions/task.actions";
import { FiPlus } from "react-icons/fi";

export function TaskList({ groupTasks, groupId, board, setBoard }) {
  const [tasks, setTasks] = useState(groupTasks)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  function onToggleAddModal() {
    setIsAddModalOpen(prevState => !prevState)
  }

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskPreview board={board} key={task.id} task={task} groupId={groupId} />
      ))}
      {!isAddModalOpen && <div onClick={onToggleAddModal} className="btn-open-add-task"><FiPlus />Add another list</div>}
      {isAddModalOpen && <AddTask onToggleAddModal={onToggleAddModal} tasks={tasks} setTasks={setTasks} board={board} groupId={groupId} />}
    </div>
  );
}
