import React from 'react'

import { GroupPreview } from "./group-preview.jsx";

export function GroupList({ groups, board }) {
  return (
    <ul className='group-list'>
      {groups?.map(group => {
        return (
          <li key={group._id}>
            <GroupPreview group={group} board={board} />
          </li>
        )
      })}


    </ul>
  )
}
