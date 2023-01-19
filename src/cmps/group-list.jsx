import React from 'react'

import { GroupPreview } from "./group-preview.jsx";
import { IoCloseSharp } from "react-icons/io5";

export function GroupList({ groups, onRemoveGroup, board }) {
  return (
    <ul className='group-list'>
      {groups?.map(group => {
        return (
          <li key={group._id}>
            <GroupPreview group={group} board={board} />
            <button className='btn-remove-group' onClick={() => onRemoveGroup(group._id)}><IoCloseSharp /></button>
          </li>
        )
      })}


    </ul>
  )
}
