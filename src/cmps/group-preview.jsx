import React from "react";

import { addTask } from '../store/actions/task.actions.js'
import { GroupTitle } from "./group-title.jsx";
import { TaskList } from "./task-list.jsx";

export function GroupPreview({ group, board, setBoard}) {


 

  return (
    <div className="group-preview">
      <GroupTitle group={group} />
      <TaskList groupTasks={group.tasks} setBoard={setBoard} board={board} groupId={group._id} />
    </div>
  );
}
