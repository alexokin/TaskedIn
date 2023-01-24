import React from "react";
import { Link, useParams } from "react-router-dom";
import { TaskDetails } from "./task-details.jsx";

export function TaskPreview({ task, groupId, board, onRemoveTask }) {
  const { taskId } = useParams();
  console.log(taskId);

  return (
    <div className="task-preview-container">
      <Link to={`${groupId}/${task._id}`} className="task-preview">
        <div className="task-title">{task.title}</div>
      </Link>
      
    </div>
  );
}
