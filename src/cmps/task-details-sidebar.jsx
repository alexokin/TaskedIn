import React from "react";
import { BsPerson, BsCheck2Square, BsSquareHalf } from "react-icons/bs";
import { AiOutlineTag, AiOutlineClockCircle } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";
import { GoArchive } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";

export function TaskDetailsSidebar() {
  return (
    <section className="task-sidebar">
      <h3 className="sidebar-title">Add to card</h3>
      <div className="btn-container">
        <button>
          <BsPerson className="icon" />
          Members
        </button>
        <button>
          <AiOutlineTag className="icon" />
          Labels
        </button>
        <button>
          <BsCheck2Square className="icon" />
          Checklist
        </button>
        <button>
          <AiOutlineClockCircle className="icon" />
          Dates
        </button>
        <button>
          <ImAttachment className="icon" />
          Attachment
        </button>
        <button>
          <IoLocationSharp className="icon" />
          Location
        </button>
        <button>
          <BsSquareHalf
            className="icon"
            style={{
              transform: "rotate(0.75turn) translateY(-20%) translateX(22%)",
            }}
          />
          Cover
        </button>

        <button className="btn-sidebar">
          <GoArchive className="icon" />
          Delete
        </button>
      </div>
    </section>
  );
}
