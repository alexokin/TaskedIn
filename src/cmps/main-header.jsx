import { InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi"
import { AiOutlineDown } from "react-icons/ai"
import { BoardStarredList } from './board-starred-list'

export function MainHeader() {
  const [isStarredListOpen, setIsStarredListOpen] = useState(false)
  const [modalLoc, setmodalLoc] = useState(null)

  function toggleStarredList(ev) {
    const BoundingClientRect = ev?.target.getBoundingClientRect()
    const modalLocToSet = {
      left: `${BoundingClientRect?.left}px`,
      top: `${BoundingClientRect?.bottom}px`
    }
    setIsStarredListOpen(prevState => !prevState)
    setmodalLoc(modalLocToSet)
  }

  return (
    <div className='main-header'>
      <div className='left-container'>
        <a className='logo' href="/workspace">Trello</a>
        <div className='btn-recent'>
          Recent
          <AiOutlineDown />
        </div>
        <div className='btn-starred' onClick={(event) => toggleStarredList(event)}>
          Starred
          <AiOutlineDown />
        </div>
        <div className='btn-create'>Create</div>
      </div>
      <div className='right-container'>
        <div className='search-container'>
          <BiSearch />
          <input type="text"
            placeholder='Search' />
        </div>
        <img width='30px' src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
      </div>

      {isStarredListOpen && <BoardStarredList toggleStarredList={toggleStarredList} modalLoc={modalLoc} />}
    </div>
  )
}
