import React from "react";
import { BsCheck2Square } from "react-icons/bs";

export function ChecklistPreview({checkList, removeChecklist}) {
  return (
    <section className="checklist-preview">
      <section className="checklist-header">
        <section className="header-left">
          <BsCheck2Square className="checklist-icon"/>
          <h3 >{checkList.title}</h3>
        </section>
        <section className="header-right">
          <button className="remove-checklist-btn"  onClick={() => removeChecklist(checkList._id)}>Delete</button>
        </section>
      </section>
    </section>
  );
}
