import React, { useState } from "react";

import { TaskPreview } from "./task-preview.jsx";
import { groupService } from "../services/group.service.local";
import { utilService } from "../services/util.service";
import { AddTask } from "./add-task.jsx";
import { taskService } from "../services/task.service.local.js";

export function TaskList({ groupTasks, groupId, board }) {
  

  

  return (
    <div className="task-list">
      {groupTasks.map((task, index) => (
        <TaskPreview board={board} key={task._id} task={task} groupId={groupId} />
      ))}
    </div>
  );
}
