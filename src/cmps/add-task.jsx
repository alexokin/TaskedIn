import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { taskService } from "../services/task.service.local";
import { addTask } from "../store/actions/task.actions";



export function AddTask({ groupId, board, setTasks, tasks }) {
  const [title, setTitle] = useState("");

  const handleChange = ({ target }) => {
    setTitle(target.value);
  };
  
  const onAdd = (ev) => {
    ev.preventDefault();
    if (!title) return;
    const savedTask = addTask(title, groupId, board)
    tasks.push(savedTask)
    setTasks((prevTasks) => [...prevTasks])
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
        
      </form>
    </section>
  );
}
