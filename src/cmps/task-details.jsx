import React, { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { TaskDetailsHeader } from "./task-details-header";
import { TaskDetailsSidebar } from "./task-details-sidebar";
import { TaskDescription } from "./task-description";
import { TaskDetailsActivities } from "./task-details-activity";
import { TaskDetailsModal } from "./task-details-modal";
import { groupService } from "../services/group.service.local";
import { utilService } from "../services/util.service";
import { TaskCheckList } from "./checklist/task-checklist";
import { TaskDetailsSubheader } from "./task-details-subheader";
import { useEffect } from "react";
import { setBoard } from "../store/board.actions";
import { boardService } from "../services/board.service.local";
import { taskService } from "../services/task.service.local";

export function TaskDetails() {
  const board = useSelector((storeState) => storeState.boardModule.currBoard);
  const navigate = useNavigate();
  const { boardId, groupId, taskId } = useParams();
  const [taskDetailsModal, setTaskDetailsModal] = useState(null);


  const {groups} = board
  const group = groups.find((group) => group._id === groupId)
  let task = group?.tasks?.find((task) => task._id === taskId);

  function backToBoard(ev) {
    ev.stopPropagation();
    navigate(-1);
  }

  function onOpenModal(type, ref) {
    const pos = utilService.getModalPosition(type, ref);
    setTaskDetailsModal({ type, pos });
  }
  return (
    <Fragment>
      {task && <section className="screen">
        <div onClick={backToBoard} className="backdrop"></div>
        <section className="task-details-container">
          <section
            className="task-details"
            onClick={(ev) => ev.stopPropagation()}
          >
            <button className="close-task-details" onClick={backToBoard}>
              <IoCloseOutline />
            </button>

            <TaskDetailsHeader
              board={board}
              task={task}
              groupId={groupId}
              groupTitle={group?.title}
            />
            <div className="task-body">
              <section className="task-content">
                <TaskDetailsSubheader
                  onOpenModal={onOpenModal}
                  board={board}
                  task={task}
                  groupId={groupId}
                />
                <TaskDescription board={board} task={task} groupId={groupId} />
                {task.checklists?.length > 0 && (
                  <TaskCheckList board={board} task={task} groupId={groupId} />
                )}
                <TaskDetailsActivities />
              </section>
              <TaskDetailsSidebar
                onOpenModal={onOpenModal}
                taskId={taskId}
                groupId={groupId}
                board={board}
              />
            </div>
          </section>
        </section>
        {taskDetailsModal && (
          <TaskDetailsModal
            board={board}
            setTaskDetailsModal={setTaskDetailsModal}
            task={task}
            data={taskDetailsModal}
            groupId={groupId}
          />
        )}
      </section>}
    </Fragment>
  );
}
