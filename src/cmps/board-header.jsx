import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { boardService } from "../services/board.service.local";
import { IoFilterSharp } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { MemberModal } from "./member-Modal";
import { FilterModal } from "./filter-modal";
import { useSelector } from "react-redux";

export function BoardHeader({ board }) {
  const [currMember, setCurrMember] = useState(null)
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const filter = useSelector((storeState) => storeState.systemModule.filter)

  function onToggleStar() {
    boardService.toggleStar(board._id)
  }

  function onMemberSelect(member = null) {
    setCurrMember(member)
  }

  function onToggleFilterModal() {
    setIsFilterModalOpen(prevState => !prevState)
  }

  return (
    <div className="board-header">
      <div className="board-status">
        <span className="board-title">{board.title}</span>
        <button onClick={onToggleStar} className={`btn-star ${board.isStarred ? 'starred' : ''}`}>{board.isStarred ? <AiFillStar /> : <AiOutlineStar />}</button>
      </div>
      <div className="board-action">
        <button onClick={onToggleFilterModal} className={`btn-filter ${filter.keyword ? 'active' : ''}`} ><IoFilterSharp /> Filter</button>
        <div className="members-container">
          {board.members?.map((member, idx) => {
            return (
              <img onClick={() => setCurrMember(member)} style={{ left: `${idx * 30}px` }} key={member._id} src={member.imgUrl} alt="" />
            )
          })}

        </div>
        <button className="btn-menu"><HiDotsHorizontal /></button>
        {currMember && <MemberModal member={currMember} onMemberSelect={onMemberSelect} />}
        {isFilterModalOpen && <FilterModal onToggleFilterModal={onToggleFilterModal} />}
      </div>
    </div>
  )
}
