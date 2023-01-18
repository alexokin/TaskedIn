import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskPreview } from "./task-preview.jsx";
import { groupService } from "../services/group.service.local";
import { utilService } from "../services/util.service";
import { AddTask } from "./add-task.jsx";
import { taskService } from "../services/task.service.local.js";

export function TaskList({ tasks, groupId, board, setBoard }) {

  
  
  async function onAddTask(groupId, title, board) {
    try {
    let group = await taskService.save(board._id, groupId, title)
      setBoard(prevBoard => ({ ...prevBoard }))
    } catch (err) {
      // showErrorMsg('Cannot save group', err)
    }
  }
  
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskPreview onAddTask={onAddTask} board={board} key={task.id} task={task} groupId={groupId} />
      ))}
      <AddTask onAddTask={onAddTask} board={board} groupId={groupId} />
    </div>
  );
}
