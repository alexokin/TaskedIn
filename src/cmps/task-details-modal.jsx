import React, { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CheckList } from "./checklist/check-list";

export function TaskDetailsModal({
  task,
  groupId,
  setTaskDetailsModal,
  data,
  board,
}) {
  const modalRef = useRef()
  const { type, pos } = data;
  const modalStyle = { left: pos.left + "px", top: pos.bottom + "px" };
  if (pos.right) {
    delete modalStyle.left;
    modalStyle.right = pos.right;
  }

  function getDynModal(type) {
    switch (type) {
      case "Checklist":
        return (
          <CheckList
            board={board}
            task={task}
            groupId={groupId}
            setTaskDetailsModal={setTaskDetailsModal}
          />
        );
        default:
          return
    }
  }

  function getModalTitle(type) {
    switch (type) {
      case 'Checklist':
        return 'Add checklist'
      default:
        return type
    }
  }

  const title = getModalTitle()

  return (
    <section className="task-details-modal" style={modalStyle}>
      <div className="task-modal-title">
        <p>{title}</p>
        <span>
          <IoCloseOutline
            onClick={(ev) => {
              ev.preventDefault();
              setTaskDetailsModal(null);
            }}
          />
        </span>
      </div>
      {getDynModal(type)}
    </section>
  );
}
