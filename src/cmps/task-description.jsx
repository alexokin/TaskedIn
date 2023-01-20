import React from "react";
import { GrTextAlignFull } from 'react-icons/gr'


export function TaskDescription() {
  return (
    <section className="task-description">
      <div className="description-header">
        <h3>Description</h3>
        <GrTextAlignFull className="description-icon" />
      </div>
      <div className="description-body">
        <input placeholder="Add a more detailed description..." type="text" />
      </div>
    </section>
  );
}
