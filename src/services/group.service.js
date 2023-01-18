
import { utilService } from "./util.service"

export const groupService = {
    add,
    remove,
    updateGroupTitle
}

function add(title, board) {
    board.groups.push({ title, _id: utilService.makeId(), tasks: [] })
}

function remove(groupId, board) {
    const title = board.groups.find(group => group._id === groupId).title
    board.groups = board.groups.filter(group => group._id !== groupId)
}

function updateGroupTitle(board, groupId, title) {
    const group = board.groups.find(group => group._id === groupId)
    group.title = title
    return board
}
