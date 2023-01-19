import { taskService } from '../../services/task.service.js'
import { boardService } from "../../services/board.service.local";
import { store } from "../store.js"

import {loadBoards, getActionUpdateBoard, updateBoard } from "../board.actions";




export async function addTask(title, groupId, board) {
    try {
        const savedTask = await taskService.add(title, groupId, board)
        updateBoard(board)
        return savedTask
        
    } catch (err) {
        console.log('Cannot add task', err)
        throw err
    }
}

