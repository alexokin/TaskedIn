import { GrFormClose } from "react-icons/gr"

export function MemberModal({ member, onMemberSelect }) {


    return (
        <div className="member-modal">
            <div className="member-info">
                <img src={member.imgUrl} alt="" />
                <span className="member-name">{member.fullname}</span>
            </div>
            <div className="btn-member">Edit profile info</div>
            <div className="btn-member">View member's board activity</div>
            <button className="btn-close-moadl" onClick={()=>onMemberSelect(null)}><GrFormClose /></button>
        </div>
    )
}