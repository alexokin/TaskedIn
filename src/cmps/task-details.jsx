import React, { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { IoCloseOutline } from 'react-icons/io5'
import { TaskDetailsHeader } from "./task-details-header";
import { TaskDetailsSidebar } from "./task-details-sidebar";


export function TaskDetails() {
  const board = useSelector((state) => state.boardModule.board)
  const navigate = useNavigate();
  const { groupId, taskId } = useParams();

  console.log(groupId, taskId);

  function backToBoard(ev) {
    ev.stopPropagation()
    navigate(-1)
  }

  return (
    <Fragment>
    <section className="screen">
      <div onClick={backToBoard} className="backdrop"></div>
      <section className="task-details-container" >
        <section  className="task-details" onClick={(ev) => ev.stopPropagation()}>
          <button className='close-task-details'  onClick={backToBoard}><IoCloseOutline /></button>

          <TaskDetailsHeader />
          <div className="task-body">
            {/* <section className="task-content">
              <TaskDetailsOverview />
              <TaskDescription/>
              <Activities/>
            </section> */}
            <TaskDetailsSidebar />
          </div>
        </section>
      </section>

    </section>
  </Fragment>
  );
}
