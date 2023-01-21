import React, { useState } from "react";

export function CheckList() {
  const [title, setTitle] = useState("Checklist");
  const [isAdding, setIsAdding] = useState(false);

function handleChange({target}) {
    const {value} = target
    setTitle(value)
}

function onAddChecklist(ev) {
    ev.preventDefault()
}

  return (
    <section className="check-list">
      <div className="input-container">
        <form onSubmit={onAddChecklist}>
          <label htmlFor="addTitle">Title</label>
          <input
            autoFocus={window.innerWidth >= 1200}
            id="addTitle"
            type="text"
            value={title}
            onChange={handleChange}
          />
          <button className="blue btn">Add</button>
        </form>
      </div>
    </section>
  );
}
