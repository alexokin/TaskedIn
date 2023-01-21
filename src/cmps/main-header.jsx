import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi"
import { AiOutlineDown } from "react-icons/ai"
import { BoardStarredList } from './board-starred-list'
import { BoardAdd } from './board-add'
import { BoardSearchList } from './board-search-list'

export function MainHeader() {
  const [isStarredListOpen, setIsStarredListOpen] = useState(false)
  const [isSearchListOpen, setIsSearchListOpen] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
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

  function toggleSearchList(ev) {
    const BoundingClientRect = ev?.target.getBoundingClientRect()
    const modalLocToSet = {
      left: `${BoundingClientRect?.right -500 }px`,
      //top: `${BoundingClientRect?.bottom}px`,
    }
    setIsSearchListOpen(prevState => !prevState)
    setmodalLoc(modalLocToSet)
  }

  function onToggleCreateBoardModal(ev) {
    const BoundingClientRect = ev?.target.getBoundingClientRect()
    const modalLocToSet = {
      left: `${BoundingClientRect?.left}px`,
      top: `${BoundingClientRect?.bottom + 16}px`
    }
    setIsCreateModalOpen(prevState => !prevState)
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
        <div className='btn-create' onClick={(event) => onToggleCreateBoardModal(event)}>Create</div>
      </div>
      <div className='right-container'>
        <div className='search-container' onClick={(event) => toggleSearchList(event)}>
          <BiSearch /> Search
        </div>
        <img width='30px' src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
      </div>

      {isStarredListOpen && <BoardStarredList toggleStarredList={toggleStarredList} modalLoc={modalLoc} />}
      {isCreateModalOpen && <BoardAdd addModalLoc={modalLoc} onToggleAddBoardModal={onToggleCreateBoardModal} fromHeader={true} />}
      {isSearchListOpen && <BoardSearchList toggleSearchList={toggleSearchList} modalLoc={modalLoc} />}
    </div>
  )
}
