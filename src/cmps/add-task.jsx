import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { taskService } from "../services/task.service.local";
import { addTask } from "../store/actions/task.actions";
import { AiOutlineClose } from "react-icons/ai";


export function AddTask({ onToggleAddModal, groupId, board, setTasks, tasks }) {
  const [title, setTitle] = useState('')

  const handleChange = ({ target }) => {
    setTitle(target.value)
  }

  const onAdd = (ev) => {
    console.log(groupId)
    if (ev) ev.preventDefault()
    if (!title) return
    const savedTask = addTask(title, groupId, board)
    tasks.push(savedTask)
    setTasks((prevTasks) => [...prevTasks])
    setTitle("")
  }

  return (
    <section className="add-task">
      <form onSubmit={onAdd}>
        <textarea
          value={title}
          type="text"
          placeholder="Enter a title for this card..."
          onChange={handleChange}
          required
          autoFocus
        />
        <button className="btn-add-task" type="submit">Add card</button>
        <button onClick={onToggleAddModal} className="btn-close-modal"><AiOutlineClose /></button>
      </form>
    </section>
  )
}
