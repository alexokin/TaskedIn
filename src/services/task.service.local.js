import { utilService } from "./util.service";
import { storageService } from "./async-storage.service";
import { boardService } from "./board.service.local";
import { groupService } from "./group.service.local";

const STORAGE_KEY = "board";

export const taskService = {
  query,
  add,
  remove,
  update,
  save
}

async function query(boardId, groupId, filter ) {
  try {
      const group = await groupService.getById(boardId,groupId)
      const regex = new RegExp(filter.keyword, 'i')
      return group.tasks.filter(task => regex.test(task.title))
  } catch (err) {
      throw err
  }
}

function add(title, groupId, board) {
  const group = board.groups.find((group) => group._id === groupId);
  const savedTask = { title, _id: utilService.makeId() , description: ''};
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

async function save(boardId, groupId, title) {
  try {
    const board = await boardService.getById(boardId);
    const group = board.groups.find((group) => group._id === groupId);
    group.tasks.push({ title, id: utilService.makeId() });
    await storageService.put(STORAGE_KEY, board);
    return group;
    
  } catch (err) {
    throw err;
  }
}


