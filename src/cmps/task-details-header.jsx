import React, { useState } from "react";
import { GrCreditCard } from "react-icons/gr";
import { groupService } from "../services/group.service.local";


export function TaskDetailsHeader({ task, groupId, groupTitle }) {
  // const [groupTitle, setgroupTitle] = useState(second)

  

  return (
    <section className="task-details-header">
      <input type="text" />
      <div className="sub-title">
        in list &nbsp;
        <span className="task-group-title">{groupTitle}</span>
      </div>
      <GrCreditCard className="header-icon" />
    </section>
  );
}
