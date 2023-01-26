import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";

export function Dates({board, task, groupId, setTaskDetailsModal}) {
  const [selectedDate, handleDateChange] = useState(new Date())

  return (
    <section className="dates">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarPicker date={selectedDate} value={selectedDate}  onChange={handleDateChange}/>
      </LocalizationProvider>

      <button className="action-btn save-btn">Save</button>
      <button className="action-btn remove-btn">Remove</button>
    </section>
  );
}
