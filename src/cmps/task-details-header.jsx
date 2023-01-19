import React from "react";
import { GrCreditCard } from "react-icons/gr";

export function TaskDetailsHeader({ taskId, groupId }) {
  return (
    <section className="task-details-header">
      <input type="text" />
      <div className="sub-title">
        in list &nbsp;
        <span className="group-title">{groupId}</span>
      </div>
      <GrCreditCard className="header-icon" />
    </section>
  );
}
