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