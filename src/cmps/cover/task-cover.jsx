import { updateTask } from "../../store/actions/task.actions";
import { CoverAttachments } from "./cover-attachments";
import { CoverColors } from "./cover-colors";
import { CoverUnsplah } from "./cover-unsplah";


export function TaskCover({ board, task, groupId, setTaskDetailsModal }) {

    function onRemoveCover() {
        task.cover = null;
        task.coverSize=null;
        updateTask(task, groupId, board)
        setTaskDetailsModal(null)
    }

    function onCoverSizeChange(size){
        task.coverSize = size
        updateTask(task, groupId, board)
    }

    return (
        <section className="task-cover">
            <div className="size">
                <span className="title">Size</span>
                <div className="size-container">
                    <div onClick={()=>onCoverSizeChange('half')} style={task?.cover} className="half-size">
                        <div className={`half-size-img ${(task.coverSize && task.coverSize === 'half') ? 'selected' : ''}`}></div>
                    </div>
                    <div onClick={()=>onCoverSizeChange('full')} style={task?.cover} className="full-size">
                        <div className={`full-size-img ${(task.coverSize && task.coverSize === 'full') ? 'selected' : ''}`}></div>
                    </div>
                </div>
                {task.cover && <button className="btn-remove-cover" onClick={onRemoveCover}>Remove Cover</button>}

            </div>

            <CoverColors board={board} groupId={groupId} task={task} />

            <CoverAttachments board={board} groupId={groupId} task={task} />

            <CoverUnsplah board={board} groupId={groupId} task={task} />

        </section>
    )
}