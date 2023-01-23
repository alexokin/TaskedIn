import React from "react";
import { TaskMembersSubheader } from "./members/task-members-subheader";

export function TaskDetailsSubheader({ task, groupId, onOpenModal }) {
    
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
      </section>
    </section>
  );
}
