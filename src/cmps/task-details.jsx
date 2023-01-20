import React, { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { TaskDetailsHeader } from "./task-details-header";
import { TaskDetailsSidebar } from "./task-details-sidebar";
import { TaskDescription } from "./task-description";
import { TaskDetailsActivities } from "./task-details-activity";
import { groupService } from "../services/group.service.local";

export function TaskDetails() {
  const board = useSelector((storeState) => storeState.boardModule.currBoard);
  const navigate = useNavigate();
  const { boardId, groupId, taskId } = useParams();

  const group = board.groups.find((group) => group._id === groupId)
  let task = group.tasks.find((task) => task._id === taskId)

 

  function backToBoard(ev) {
    ev.stopPropagation();
    navigate(-1);
  }

  

  return (
    <Fragment>
      <section className="screen">
        <div onClick={backToBoard} className="backdrop"></div>
        <section className="task-details-container">
          <section
            className="task-details"
            onClick={(ev) => ev.stopPropagation()}
          >
            <button className="close-task-details" onClick={backToBoard}>
              <IoCloseOutline />
            </button>

            <TaskDetailsHeader board={board} task={task} groupId={groupId} groupTitle={group.title} />
            <div className="task-body">
              <section className="task-content">
                {/* <TaskDetailsOverview /> */}
                <TaskDescription board={board} task={task} groupId={groupId}/>
                <TaskDetailsActivities />
              </section>
              <TaskDetailsSidebar taskId={taskId} groupId={groupId} board={board}/>
            </div>
          </section>
        </section>
      </section>
    </Fragment>
  );
}
