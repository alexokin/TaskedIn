import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { showErrorMsg } from "../services/event-bus.service.js";
import { taskService } from "../services/task.service.local.js";
import { AddTask } from "./add-task.jsx";
import { GroupTitle } from "./group-title.jsx";
import { TaskList } from "./task-list.jsx";
import { FiPlus } from "react-icons/fi";

export function GroupPreview({ group, board }) {

  const filter = useSelector((storeState) => storeState.systemModule.filter)
  const [isFiltered, setIsFiltered] = useState(false)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  useEffect(() => {

    // const regex = new RegExp(filter.keyword, 'i')
    // group.tasks = group.tasks.filter(task => regex.test(task.title))
    // console.log(group.tasks)
    // setIsFiltered(true)
  }, [filter])

  function onToggleAddModal() {
    setIsAddModalOpen(prevState => !prevState)
  }

  return (
    <div className="group-preview">
      <GroupTitle group={group} board={board} />
     <TaskList groupTasks={group.tasks} board={board} groupId={group._id}/>
      <div className="add-container">
        {!isAddModalOpen && <div onClick={onToggleAddModal} className="btn-open-add-task"><div className="plus"><FiPlus /></div>Add a card</div>}
        {isAddModalOpen && <AddTask onToggleAddModal={onToggleAddModal} tasks={group.tasks} board={board} groupId={group._id} />}
      </div>
    </div>
  )
}
