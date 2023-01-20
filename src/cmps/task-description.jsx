import React, { useState } from "react";
import { GrTextAlignFull } from 'react-icons/gr'
import { updateTask } from "../store/actions/task.actions";


export function TaskDescription({ board, task, groupId }) {
  const [isBtnsDesc, setIsBtnsDesc] = useState(false)
  const [descText, setDescText] = useState(task.description)


  function handleChange({target}) {
    const {value} = target
    console.log(value);
    setDescText(value)
  }

  function setTaskDesc() {
    task.description = descText
    updateTask(task, groupId, board)
  }

  function handleDescChange (ev) {
    ev.preventDefault()
    setTaskDesc()
  }

  return (
    <section className="task-description">
      <div className="description-header">
        <h3>Description</h3>
        <GrTextAlignFull className="description-icon" />
      </div>
      <div className="description-body">
        <input onBlur={handleDescChange} onChange={handleChange} onFocus={() => {
            setIsBtnsDesc(true)
          }} placeholder="Add a more detailed description..." type="text" />
        {isBtnsDesc && 
        <div className="btns-container">
        <button className="btn-save" >Save</button>
        <button  className="btn-cancel">
          Cancel
        </button>
      </div>}
      </div>
    </section>
  );
}
