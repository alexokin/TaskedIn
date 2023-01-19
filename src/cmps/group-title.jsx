import React, { useEffect, useState } from "react";
import { groupService } from "../services/group.service.local";

export function GroupTitle({ group, boardId }) {
  const [groupToEdit, setGroupToEdit] = useState(group)

  useEffect(() => {
    groupService.save(boardId, groupToEdit)
  }, [groupToEdit])

  async function onHandleChange({ target }) {
    groupToEdit.title = target.value
    setGroupToEdit(prevGroup => ({ ...prevGroup }))
  }
  return (
    <div className="group-title">
      {/* <h3>{group.title}</h3> */}
      <input type="text"
        name="title"
        value={groupToEdit?.title}
        onChange={onHandleChange} />
      <button className="grp-action-btn">...</button>
    </div>
  );
}
