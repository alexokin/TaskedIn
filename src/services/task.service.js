import { storageService } from "./async-storage.service";
import { utilService } from "./util.service";

const STORAGE_KEY = "board";

export const taskService = {
  add,
  remove,
  update,
};

function add(title, groupId, board) {
  const group = board.groups.find((group) => group._id === groupId);
  const savedTask = { title, _id: utilService.makeId() };
  group.tasks.push(savedTask);
  return Promise.resolve(savedTask);
}

async function remove(board, groupId, taskId) {
  try {
    const group = board.groups.find((group) => group._id === groupId);
    group.tasks = group.tasks.filter((task) => task._id !== taskId);
    await storageService.put(STORAGE_KEY, board);
  } catch (err) {
    throw err;
  }
}

async function update(board, groupId, task) {
  try {
    const group = board.groups.find((group) => group._id === groupId);
    group.tasks = group.tasks.map((currTask) =>
      currTask._id === task._id ? task : currTask
    );
    await storageService.put(STORAGE_KEY, board);
  } catch (err) {
    throw err;
  }
}
