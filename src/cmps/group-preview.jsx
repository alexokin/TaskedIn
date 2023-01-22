import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { showErrorMsg } from "../services/event-bus.service.js";
import { taskService } from "../services/task.service.local.js";
import { GroupTitle } from "./group-title.jsx";
import { TaskList } from "./task-list.jsx";

export function GroupPreview({ group, board }) {

  const filter = useSelector((storeState) => storeState.systemModule.filter)
  const [isFiltered, setIsFiltered] = useState(false)

  useEffect(() => {
    const regex = new RegExp(filter.keyword, 'i')
    group.tasks.filter(task => regex.test(task.title))
    setIsFiltered(true)
  }, [filter])

  return (
    <div className="group-preview">
      <GroupTitle group={group} board={board} />
      {isFiltered && <TaskList groupTasks={group.tasks} board={board} groupId={group._id} />}
    </div>
  )
}
