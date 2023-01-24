import React from "react";
import { Link, useParams } from "react-router-dom";
import { TaskLabelsList } from "./labels/task-label-list.jsx";
import { TaskPreviewIcons } from "./task-preview-icons.jsx";


export function TaskPreview({ task, groupId, board, onRemoveTask }) {
  const { taskId } = useParams();
  console.log(taskId);

  function isShowLabels () {
    if (task.labelIds && task.labelIds.length && task.labelIds !== 0) return true
  }

  return (
    <div className="task-preview-container">
      <Link to={`${groupId}/${task._id}`} className="task-preview">
        <div className="task-title">
      {isShowLabels() && <TaskLabelsList labelIds={task.labelIds} board={board}/>}
          {task.title}
        <TaskPreviewIcons groupId={groupId} task={task} board={board}/>
          </div>

      </Link>
    </div>
  );
}
