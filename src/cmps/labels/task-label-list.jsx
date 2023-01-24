import React from "react";

export function TaskLabelsList({ labelIds, board }) {
  const boardLabels = board.labels;
  const labelsToShow = boardLabels.filter((label) =>
    labelIds.includes(label._id)
  );

  return (
    <section className="task-labels-list">
        {labelsToShow.map((label) => (
            <div className="label-container" key={label._id}>
                <div className={`task-labels-preview ${label.color +'-hoverable'}`}></div>
            </div>
        ))}
    </section>
  )
}
