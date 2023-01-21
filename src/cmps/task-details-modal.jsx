import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { CheckList } from './checklist/check-list';

export function TaskDetailsModal({task, groupId, setTaskDetailsModal, data}) {



  const { type, pos } = data;
  const modalStyle = { left: pos.left + "px", top: pos.bottom + "px" };
  if (pos.right) {
    delete modalStyle.left;
    modalStyle.right = pos.right;
  }


  return (
    <section className='task-details-modal' style={modalStyle}>
      <div className='task-modal-title'>
        <p>
          Add checklist
        </p>
        <span>
            <IoCloseOutline
             onClick={(ev) => {
              ev.preventDefault();
              setTaskDetailsModal(null);
            }}
            />
          </span>
      </div>
      <CheckList setTaskDetailsModal={setTaskDetailsModal}/>
    </section>
  )
}
