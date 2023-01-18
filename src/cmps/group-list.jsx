import React from 'react'

import { GroupPreview } from "./group-preview.jsx";

export function GroupList({ groups, onRemoveGroup }) {
  return (
    <ul className='group-list'>
      {groups.map(group => {
        return (
          <li key={group._id}>
            <GroupPreview group={group} />
            <button onClick={() => onRemoveGroup(group._id)}>X</button>
          </li>
        )
      })}


    </ul>
  )
}
