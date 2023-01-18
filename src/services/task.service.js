import { utilService } from "./util.service";

export const taskService = {
  add,
  remove,
  update,
};

function add(title, groupId, board) {
  const group = board.groups.find((group) => group._id === groupId);
  group.tasks.push({ title, _id: utilService.makeId() });
}

function remove(groupId, taskId, board) {
    const group = board.groups.find((group) => group._id === groupId)
    group.tasks = group.tasks.filter((task) => task._id !== taskId)
}

function update(board, groupId, task) {
  const groupIdx = board.groups.findIndex((group) => group.id === groupId)
  const taskIdx = board.groups[groupIdx].tasks.findIndex((currTask) => currTask.id === task.id)
  board.groups[groupIdx].tasks.splice(taskIdx, 1, task)

  return board
}


function getEmptyTask(params) {
  
}