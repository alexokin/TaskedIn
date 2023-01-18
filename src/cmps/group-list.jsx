import React from 'react'

import { GroupPreview } from "./group-preview.jsx";

export function GroupList({ groups, onRemoveGroup,board,setBoard }) {
  return (
    <ul className='group-list'>
      {groups.map(group => {
        return (
          <li key={group._id}>
            <GroupPreview setBoard={setBoard} group={group} board={board}/>
            <button onClick={() => onRemoveGroup(group._id)}>X</button>
          </li>
        )
      })}


    </ul>
  )
}
