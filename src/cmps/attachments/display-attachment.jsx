import React from "react";
import { updateTask } from "../../store/actions/task.actions";
import { BsSquareHalf } from "react-icons/bs";
import { utilService } from "../../services/util.service";

export function DisplayAttachment({ task, attachment, groupId, board }) {
  function onDeleteAttachment() {
    const { _id } = attachment;
    const taskToUpdate = {
      ...task,
      attachments: task.attachments.filter(
        (attachment) => attachment._id !== _id
      ),
    };
    updateTask(taskToUpdate, groupId, board);
  }

  return (
    <section className="display-attachment">
      <a
        className="display-attachment-img"
        style={{ backgroundImage: `url(${attachment.url})` }}
        href={attachment.url}
        target={"_blank"}
        rel="noreferrer"
      >
        {" "}
      </a>
      <section className="attachment-details">
        <section className="attachment-name-and-options">
          <span className="attachment-name">{attachment.name}</span>
          <span>Added {utilService.timePassed(attachment.createdAt)}</span>
          <span> - </span>
          <span onClick={onDeleteAttachment} className="delete-attachment">
            Delete
          </span>
        </section>
        <span className="attachment-options">
          <span className="make-attachment-cover">
            <section className="svg-holder">
              <BsSquareHalf
                className="icon"
                style={{
                  transform:
                    "rotate(0.75turn) translateY(-20%) translateX(22%)",
                }}
              />
            </section>
          </span>
        </span>
      </section>
    </section>
  );
}
