import { utilService } from "./util.service";
import { storageService } from "./async-storage.service";
import { boardService } from "./board.service.local";

const STORAGE_KEY = "board";

export const taskService = {
  save,
};
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
