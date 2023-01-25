import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { GrTextAlignFull } from "react-icons/gr";
import { updateTask } from "../store/actions/task.actions";

export function TaskDescription({ board, task, groupId }) {
  const [isDescOpen, setIsDescOpen] = useState(false);
  const [descText, setDescText] = useState(task.description);
  const initialDesc = useRef();


  useEffect(() => {
    if (isDescOpen) {
      initialDesc.current = task.description
    } else {
      updateTask(task, groupId, board);
    }
  }, [isDescOpen])

  function handleChange({ target }) {
    const { value } = target;
    setDescText(value);
  }

  function setTaskDesc(isCancel) {
    if (isCancel) {
      setDescText(initialDesc.current);
      setIsDescOpen(false)
    } else {
      task.description = descText;
      updateTask(task, groupId, board);
    }
  }

  function handleBlur({ relatedTarget }) {
    if (relatedTarget?.id === 'cancel') {
      setTaskDesc(true)
    } else {
      setTaskDesc(false)
      setIsDescOpen(false)
    }
  }

  return (
    <section className="task-description">
      <div className="description-header">
        <h3>Description</h3>
        <GrTextAlignFull className="description-icon" />
      </div>
      <div className="description-body">
        <div className="input-container">
          <input
            value={descText}
            className={`${!task.description ? 'empty' : ''}`}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={() => {
              setIsDescOpen(true)
            }}
            placeholder="Add a more detailed description..."
            type="text"
          />
        </div>
        <div className={`btns-container ${isDescOpen ? 'open' : ''}`}>
          <button id="save" className="btn-save">Save</button>
          <button id="cancel" className="btn-cancel">Cancel</button>
        </div>
      </div>
    </section>
  );
}
