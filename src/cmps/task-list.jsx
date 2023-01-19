import React, { useState } from "react";

import { TaskPreview } from "./task-preview.jsx";
import { groupService } from "../services/group.service.local";
import { utilService } from "../services/util.service";
import { AddTask } from "./add-task.jsx";
import { taskService } from "../services/task.service.local.js";
import { addTask, removeTask } from "../store/actions/task.actions";

export function TaskList({ groupTasks, groupId, board, setBoard }) {
  const [tasks, setTasks] = useState(groupTasks)
 
  // function onRemoveTask(groupId, taskId) {
  //   console.log(groupId, taskId);
  // }
  
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskPreview  board={board} key={task._id} task={task} groupId={groupId} />
      ))}
      <AddTask tasks={tasks} setTasks={setTasks} board={board} groupId={groupId} />
    </div>
  );
}
