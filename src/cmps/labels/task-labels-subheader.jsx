import React, { useRef } from "react";

export function TaskLabelsSubheader({ labelIds, onOpenModal }) {
  const addLabelBtnRef = useRef();
  const labelsContainerRef = useRef();
  const boardLabels = useSelector(
    (state) => state.boardModule.currBoard.labels
  );

  const labelsToShow = boardLabels.filter((label) =>
    labelIds.includes(label._id)
  );

  return (
    <section className="task-labels-subheader">
      <h4 className="title">Labels</h4>
      <div className="labels-container" ref={labelsContainerRef}>
        {labelsToShow.map((label) => (
          <button
         
            onClick={() => {
              onOpenActionModal("Labels", labelsContainerRef);
            }}
            key={label._id}
            className={`btn-label ${label.class}`}
          >
            <div className={`color-circle ${label.color}`}></div>
            <span>{label.title}</span>
          </button>
        ))}
        <button
          onClick={() => {
            onOpenActionModal("Labels", addLabelBtnRef);
          }}
          ref={btnAddLabelRef}
          className="btn-add-label"
        >
          <AiOutlinePlus />
        </button>
      </div>
    </section>
  );
}
