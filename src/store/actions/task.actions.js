import { taskService } from '../../services/task.service.local'
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

export async function removeTask(taskId, groupId, board) {
    try {
        await taskService.remove(board, groupId, taskId)
        updateBoard(board)
        
    } catch (err) {
        console.log('Cannot add task', err)
        throw err
    }
}

export async function updateTask(task, groupId, board) {
    try {
        await taskService.update(board, groupId, task)
        updateBoard(board)
        
    } catch (err) {
        console.log('Cannot add task', err)
        throw err
    }
}

