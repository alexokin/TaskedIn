import React from "react";

export function GroupTitle({ group }) {
  return (
    <div className="group-title">
      <h3>{group.title}</h3>
      <button className="grp-action-btn">...</button>
    </div>
  );
}
