import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { boardService } from "../services/board.service.local";
import { IoFilterSharp } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { MemberModal } from "./memberModal";

export function BoardHeader({ board }) {
  const [currMember,setCurrMember]= useState(null)

  function onToggleStar() {
    boardService.toggleStar(board._id)
  }

  function onMemberSelect(member = null) {
    setCurrMember(member)
  }

  return (
    <div className="board-header">
      <div className="board-status">
        <span className="board-title">{board.title}</span>
        <button onClick={onToggleStar} className={`btn-star ${board.isStarred ? 'starred' : ''}`}>{board.isStarred ? <AiFillStar /> : <AiOutlineStar />}</button>
      </div>
      <div className="board-action">
        <button className="btn-filter"><IoFilterSharp /> Filter</button>
        <div className="members-container">
          {board.members?.map((member, idx) => {
            return (
              <img onClick={()=>setCurrMember(member)} style={{ left: `${idx * 30}px` }} key={member._id} src={member.imgUrl} alt="" />
            )
          })}

        </div>
        <button className="btn-menu"><HiDotsHorizontal /></button>
        {currMember && <MemberModal member={currMember} onMemberSelect={onMemberSelect}/>}
      </div>
    </div>
  )
}
