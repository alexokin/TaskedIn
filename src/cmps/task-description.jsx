import React, { useRef, useState } from "react";
import { GrTextAlignFull } from "react-icons/gr";
import { updateTask } from "../store/actions/task.actions";

export function TaskDescription({ board, task, groupId }) {
  const [isBtnsDesc, setIsBtnsDesc] = useState(false);
  const [descText, setDescText] = useState(task.description);
  const initialDesc = useRef(task.description);

  function handleChange({ target }) {
    const { value } = target;
    console.log(value);
    setDescText(value);
  }

  function setTaskDesc(isCancel) {
    task.description = descText;
    if (isCancel) {
      task.description = initialDesc["current"];
      setDescText(task.description);
    }
    updateTask(task, groupId, board);
  }

  function handleDescChange(ev, isCancel) {
    ev.preventDefault();
    setTaskDesc(isCancel);
  }

  return (
    <section className="task-description">
      <div className="description-header">
        <h3>Description</h3>
        <GrTextAlignFull className="description-icon" />
      </div>
      <div className="description-body">
        <input
          value={descText}
          onBlur={handleDescChange}
          onChange={handleChange}
          onFocus={() => {
            setIsBtnsDesc(true);
          }}
          placeholder="Add a more detailed description..."
          type="text"
        />
        {isBtnsDesc && (
          <div className="btns-container">
            <button className="btn-save">Save</button>
            <button className="btn-cancel" 
              onClick={(ev) => handleDescChange(ev, true)}
            >Cancel</button>
          </div>
        )}
      </div>
    </section>
  );
}
