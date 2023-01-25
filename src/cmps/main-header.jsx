import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi"
import { SiTrello } from 'react-icons/si'
import { AiOutlineDown, AiOutlineHome } from "react-icons/ai"
import { BoardStarredList } from './board-starred-list'
import { BoardAdd } from './board-add'
import { BoardSearchList } from './board-search-list'
import { useEffect } from 'react'
import { BoardRecentList } from './board-recent-list'
import { useSelector } from 'react-redux'

export function MainHeader() {
  const board = useSelector((storeState) => storeState.boardModule.currBoard)
  const [isStarredListOpen, setIsStarredListOpen] = useState(false)
  const [isSearchListOpen, setIsSearchListOpen] = useState(false)
  const [isRecentListOpen, setIsRecentListOpen] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [modalLoc, setmodalLoc] = useState(null)
  const [hideHeader, setHideHeader] = useState(false)

  useEffect(() => {
    if (window.location.href === 'http://localhost:3000/') {
      setHideHeader(true)
    }
  }, [])


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
      left: `${BoundingClientRect?.right - 500}px`,
      //top: `${BoundingClientRect?.bottom}px`,
    }
    setIsSearchListOpen(prevState => !prevState)
    setmodalLoc(modalLocToSet)
  }

  function toggleRecentList(ev) {
    const BoundingClientRect = ev?.target.getBoundingClientRect()
    const modalLocToSet = {
      left: `${BoundingClientRect?.left}px`,
      top: `${BoundingClientRect?.bottom}px`
    }
    setIsRecentListOpen(prevState => !prevState)
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
    <div>
      {!hideHeader && <div style={board.headerStyle} className='main-header'>
        <div className='left-container'>
        
          <a className='logo' href="/">
          <AiOutlineHome /></a>
          <a className='logo' href="/workspace">TaskedIn</a>
          <div className='btn-recent' onClick={(event) => toggleRecentList(event)}>
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
          <img width='24px' src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
        </div>

        {isStarredListOpen && <BoardStarredList toggleStarredList={toggleStarredList} modalLoc={modalLoc} />}
        {isRecentListOpen && <BoardRecentList toggleRecentList={toggleRecentList} modalLoc={modalLoc} />}
        {isCreateModalOpen && <BoardAdd addModalLoc={modalLoc} onToggleAddBoardModal={onToggleCreateBoardModal} fromHeader={true} />}
        {isSearchListOpen && <BoardSearchList toggleSearchList={toggleSearchList} modalLoc={modalLoc} />}
      </div>}
    </div>
  )
}
