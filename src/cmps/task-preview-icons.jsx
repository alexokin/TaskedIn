import React from 'react'

export function TaskPreviewIcons({task, groupId, board}) {
  const boardMembers = board.members
  const membersToShow = boardMembers ? boardMembers.filter((member) => task.memberIds?.includes(member._id)) : []

  return (
    <section className='task-preview-icons'>
        {task.memberIds && task.memberIds.length !== 0 && (
        <section className={`members-img `}>
          {membersToShow.map((member) => (
            <div className="member-img" key={member._id}>
              <img src={member.imgUrl} alt="member-img" />
            </div>
          ))}
        </section>
      )}
    </section>
  )
}
