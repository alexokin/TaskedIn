import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { showErrorMsg } from "../services/event-bus.service.js";
import { taskService } from "../services/task.service.local.js";
import { GroupTitle } from "./group-title.jsx";
import { TaskList } from "./task-list.jsx";

export function GroupPreview({ group, board }) {

  // const filter = useSelector((storeState) => storeState.systemModule.filter)
  // const [tasksToDisplay, setTasksToDisplay] = useState(null)

  // useEffect(() => {
  //   ; (async () => {
  //     try {
  //       const tasksToSet = await taskService.query(board._id, group._id, filter)
  //       setTasksToDisplay(tasksToSet)
  //     } catch (err) {
  //       showErrorMsg("Cannot load tasks", err)
  //     }
  //   })()
  // }, [filter])

  return (
    <div className="group-preview">
      <GroupTitle group={group} board={board} />
      <TaskList groupTasks={group.tasks} board={board} groupId={group._id} />
    </div>
  )
}
