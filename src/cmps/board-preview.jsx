import React from 'react'


export function BoardPreview({board}) {

  return (
    <div className='board-preview' style={board.style}>
      <span>{board.title}</span>

    </div>
  )
}

