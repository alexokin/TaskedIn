import React from "react";
import { TaskLabelsSubheader } from "./labels/task-labels-subheader";
import { TaskMembersSubheader } from "./members/task-members-subheader";

export function TaskDetailsSubheader({ task, groupId, onOpenModal }) {
  function isShowLabels() {
    if (task.labelIds && task.labelIds.length && task.labelIds !== 0)
      return true;
  }
  function isShowMembers() {
    if (task.memberIds && task.memberIds.length && task.memberIds !== 0)
      return true;
  }

  return (
    <section className="task-details-subheader">
      <section className="members-labels-container">
        {isShowMembers() && (
          <TaskMembersSubheader
            onOpenModal={onOpenModal}
            memberIds={task.memberIds}
          />
        )}
        {isShowLabels() && (
          <TaskLabelsSubheader
            onOpenModal={onOpenModal}
            labelIds={task.labelIds}
          />
        )}
      </section>
    </section>
  );
}
