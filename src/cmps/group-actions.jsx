import { GrFormClose } from "react-icons/gr"

export function GroupActions({ onToggleModal,onRemoveGroup, group, onCopyGroup }) {


    return (
        <div className="group-actions">
            <button onClick={onToggleModal} className="btn-close-actions"><GrFormClose /></button>
            <div className="actions-title">List actions</div>
            <hr />
            <div onClick={() => onRemoveGroup(group._id)} className="btn-remove-group">Remove group</div>
            <div onClick={() => onCopyGroup(group)} className="btn-copy-group">Copy group</div>
        </div>
    )
}