import React from 'react'

import { GroupPreview } from "./group-preview.jsx";

export function GroupList({board}) {
  return (
    <section className='group-list'>
      
      <GroupPreview />
      <GroupPreview />
      <GroupPreview />
      <GroupPreview />
      <GroupPreview />
      <GroupPreview />
    </section>
  )
}
