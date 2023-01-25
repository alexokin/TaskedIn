import React from "react";
import { Link, useParams } from "react-router-dom";
import { TaskLabelsList } from "./labels/task-label-list.jsx";
import { TaskPreviewIcons } from "./task-preview-icons.jsx";
import { Draggable } from "react-beautiful-dnd"

export function TaskPreview({ task, groupId, board, onRemoveTask, index }) {
  const { taskId } = useParams();
  console.log(taskId);

  function isShowLabels() {
    if (task.labelIds && task.labelIds.length && task.labelIds !== 0) return true
  }

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided, snapshot) => (
        <div className={`task-preview-container ${snapshot.isDragging ? 'dragged' : ''}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <Link to={`${groupId}/${task._id}`} className={`task-preview`}>
            {task.cover && task.coverSize === 'half' && <div style={task.cover} className={`task-list-cover ${task.cover.backgroundImage ? 'img' : ''}`}></div>}
            <div style={(task.cover && task.coverSize === 'full') ? task.cover : {}} className={`task-title ${(task.cover && task.coverSize === 'full') ? 'full' : ''} ${(task.cover?.backgroundImage) ? 'img' : ''}`}>
              {isShowLabels() && (!task.coverSize || task.coverSize === 'half') && <TaskLabelsList labelIds={task.labelIds} board={board} />}
              {task.title}
              {(!task.coverSize || task.coverSize === 'half') && <TaskPreviewIcons groupId={groupId} task={task} board={board} />}
            </div>

          </Link>
        </div>
      )}
    </Draggable>
  )
}