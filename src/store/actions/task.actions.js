import { taskService } from '../../services/task.service.js'
import { boardService } from "../../services/board.service.local";
import { store } from "../store.js"

import {loadBoards, getActionUpdateBoard, updateBoard } from "../board.actions";

// export async function loadTasks() {
//     try {
//         const tasks = await taskService.query()
//         console.log('Tasks from DB:', tasks)
//         store.dispatch({
//             type: SET_TASKS,
//             tasks
//         })

//     } catch (err) {
//         console.log('Cannot load tasks', err)
//         throw err
//     }

// }


export async function addTask(title, groupId, board) {
    try {
        const savedTask = await taskService.add(title, groupId, board)
        // const updatedBoard = await boardService.save(savedBoard)
        // if(!savedBoard) throw new Error('can\'t save right now')
    
        updateBoard(board)
        return savedTask
        
    } catch (err) {
        console.log('Cannot add task', err)
        throw err
    }
}

