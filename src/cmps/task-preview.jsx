import React from "react";
import { TaskDetails } from "./task-details.jsx";

export function TaskPreview({task, groupId}) {
  return <div className="task-preview">
    <h3>task preview</h3>
    <TaskDetails />
  </div>;
}
