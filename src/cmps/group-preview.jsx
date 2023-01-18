import React from "react";
import { useSelector } from "react-redux";

import { GroupTitle } from "./group-title.jsx";
import { TaskList } from "./task-list.jsx";

export function GroupPreview({ group, board, setBoard }) {
  const tasks = useSelector((storeState) => storeState.taskModule.tasks)
 

  return (
    <div className="group-preview">
      <GroupTitle group={group} />
      <TaskList setBoard={setBoard} board={board} tasks={tasks} groupId={group._id} />
      
      
    </div>
  );
}
