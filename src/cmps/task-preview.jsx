import React from "react";
import { TaskDetails } from "./task-details.jsx";

export function TaskPreview({task, groupId, board, onRemoveTask}) {
  
  return <div className="task-preview">
    <h3>{task.title}</h3>
    <TaskDetails />

  </div>;
}
