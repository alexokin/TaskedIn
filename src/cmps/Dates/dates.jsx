import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { updateTask } from "../../store/actions/task.actions";

export function Dates({ board, task, groupId, setTaskDetailsModal }) {
  const [selectedDate, handleDateChange] = useState(new Date());

  function onAddDueDate(ev) {
    ev.preventDefault();
    const dueDate = new Date(selectedDate).getTime();
    if (task.dueDate) {
      task.dueDate.date = dueDate;
    } else {
      task.dueDate = {
        date: dueDate,
        isDone: false,
      };
    }
    updateTask(task, groupId, board);
    setTaskDetailsModal(null);
  }

  function onRemoveDueDate() {
    task.dueDate = null;
    updateTask(task, groupId, board);
    setTaskDetailsModal(null);
  }

  return (
    <section className="dates">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarPicker
          date={selectedDate}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </LocalizationProvider>

      <button onClick={onAddDueDate} className="action-btn save-btn">
        Save
      </button>
      <button onClick={onRemoveDueDate} className="action-btn remove-btn">
        Remove
      </button>
    </section>
  );
}
