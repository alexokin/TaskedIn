import { updateTask } from "../../store/actions/task.actions";
import { CoverAttachments } from "./cover-attachments";
import { CoverColors } from "./cover-colors";
import { CoverUnsplah } from "./cover-unsplah";


export function TaskCover({ board, task, groupId, setTaskDetailsModal }) {

    function onRemoveCover() {
        task.cover = null;
        updateTask(task, groupId, board)
        setTaskDetailsModal(null)
    }

    return (
        <section className="task-cover">
            <div className="size">
                {task.cover && <button className="btn-remove-cover" onClick={onRemoveCover}>Remove Cover</button>}

            </div>

            <CoverColors board={board} groupId={groupId} task={task} />

            <CoverAttachments board={board} groupId={groupId} task={task} />

            <CoverUnsplah board={board} groupId={groupId} task={task} />

        </section>
    )
}