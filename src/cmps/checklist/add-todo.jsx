import React from "react";
import { useEffect, useRef, useState } from "react";

export function AddTodo({addNewTodo, checkListId, closeModal}) {
  const [title, setTitle] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange({ target }) {
    setTitle(target.value);
  }

  function onAddTodo(ev) {
    ev.preventDefault();
    addNewTodo(title, checkListId);
    setTitle("");
    inputRef.current.focus();
  }

  return (
    <section className="add-todo ">
      <form onSubmit={onAddTodo}>
        <input
          className="input"
          placeholder="Add an item"
          value={title}
          onChange={handleChange}
          onBlur={closeModal}
          ref={inputRef}
        />
        <section className="options">
          <button className="btn blue" type="submit">
            Add
          </button>
          <button className="btn" onClick={closeModal}>
            Cancel
          </button>
        </section>
      </form>
    </section>
  );
}
