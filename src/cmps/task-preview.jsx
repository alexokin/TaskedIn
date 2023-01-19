import React from "react";
import { TaskDetails } from "./task-details.jsx";

export function TaskPreview({task, groupId, board}) {
  
  return <div className="task-preview">
    <div className="task-title">{task.title}</div>
    <TaskDetails />
  </div>;
}
