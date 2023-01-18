import React, { useState } from "react";
import { taskService } from "../services/task.service.local";

export function AddTask({ groupId, board, onAddTask }) {
  const [title, setTitle] = useState("");

  const handleChange = ({ target }) => {
    setTitle(target.value);
  };
  
  const onAdd = (ev) => {
    console.log(groupId);
    if (ev) ev.preventDefault();
    if (!title) return;
    // onAddTask(groupId, title, board)
    taskService.save(board._id, groupId, title);
    setTitle("");
  };

  return (
    <section className="add-task">
      <form onSubmit={onAdd}>
        <textarea
          value={title}
          type="text"
          placeholder="Enter a title for this card..."
          onChange={handleChange}
        />
        <button>Add card</button>
        <section className="svg-holder"></section>
      </form>
    </section>
  );
}
