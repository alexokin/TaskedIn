import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { EditTitle } from "./edit-title";

export function TodoPreview({ todo, checkListId, updateTodo, removeTodo }) {
  const [isEditTitleOpen, setIsEditTitleOpen] = useState(false)

  function toggleTitleEdit() {
    setIsEditTitleOpen(!isEditTitleOpen)
  }

  function onChangeTodoDone() {
    todo.isDone = !todo.isDone
    updateTodo(todo, checkListId)
  }

  function editTitle (title) {
    todo.title = title
    updateTodo(todo, checkListId)
  }

  function onRemoveTodo (ev) {
    ev.stopPropagation()
    removeTodo(todo.id, checkListId)
  }

  return (
    <section className="todo-preview">
    <label htmlFor={todo.id} className="checkbox-container">
      <input className='checkbox' id={todo.id} type="checkbox" checked={todo.isDone} onChange={onChangeTodoDone} />
      <span className="checkmark"></span>
    </label>

    {isEditTitleOpen ? (
      <EditTitle itemTitle={todo.title} editTitle={editTitle} toggleTitleEdit={toggleTitleEdit} />
    ) : (
      <section className="title" onClick={toggleTitleEdit}>
        <p className={todo.isDone ? 'crossed-out' : ''}>{todo.title}</p>
        <button className="close-btn" onClick={onRemoveTodo}>
          <BsThreeDots />
        </button>
      </section>
    )}
  </section>
  )
}
