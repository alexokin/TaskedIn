import React from "react";
import { updateTask } from "../../store/actions/task.actions";
import { ChecklistPreview } from "./checklist-preview";

export function TaskCheckList({ task, groupId,board }) {

  function removeChecklist(checklistId) {
    task.checklists = task.checklists.filter((checklist) => checklist._id !== checklistId)
    updateTask(task, groupId, board)
  }

  return (
    <section className="task-checklist">
      {task.checklists.map((checkList) => (
        <div>
          <ChecklistPreview
            removeChecklist={removeChecklist}
            checkList={checkList}
            key={checkList._id}
          />
        </div>
      ))}
    </section>
  );
}
