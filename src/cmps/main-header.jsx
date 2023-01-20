import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { BiSearch } from "react-icons/bi"
import { AiOutlineDown } from "react-icons/ai"

export function MainHeader() {

  
  return (
    <div className='main-header'>
      <div className='left-container'>
        <a className='logo' href="/workspace">Trello</a>
        <div className='btn-recent'>
          <span>Recent</span>
          <AiOutlineDown />
        </div>
        <div className='btn-starred'>
          <span>Starred</span>
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
    </div>
  )
}
