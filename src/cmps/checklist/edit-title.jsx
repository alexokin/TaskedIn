import React, { useEffect, useRef, useState } from "react";
import { GrClose } from "react-icons/gr";

export function EditTitle({ editTitle, itemTitle, toggleTitleEdit }) {
  const [title, setTitle] = useState(itemTitle);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange({ target }) {
    setTitle(target.value);
  }

  function onEditTitle() {
    editTitle(title);
    toggleTitleEdit();
  }

  function handleUserKeyPress(ev) {
    if (ev.key === "Enter" && !ev.shiftKey) {
      onEditTitle();
    }
  }

  return (
    <section className="edit-title">
      <textarea
        className="input"
        onKeyDown={handleUserKeyPress}
        onBlur={onEditTitle}
        value={title}
        onChange={handleChange}
        ref={inputRef}
        spellCheck={false}
      ></textarea>
      <section className="options">
        <button className="btn blue">Save</button>
        <GrClose />
      </section>
    </section>
  );
}
