import { taskService } from '../../services/task.service.js'
import { store } from "../store.js"
import { SET_TASKS, REMOVE_TASK, ADD_TASK, UPDATE_TASK } from '../reducers/toy.reducer'

export function getActionRemoveTask(taskId) {
    return {
        type: REMOVE_TASK,
        taskId
    }
}
export function getActionAddTask(task) {
    return {
        type: ADD_TASK,
        task
    }
}
export function getActionUpdateTask(task) {
    return {
        type: UPDATE_TASK,
        task
    }
}

export async function loadTasks() {
    try {
        const tasks = await taskService.query()
        console.log('Tasks from DB:', tasks)
        store.dispatch({
            type: SET_TASKS,
            tasks
        })

    } catch (err) {
        console.log('Cannot load tasks', err)
        throw err
    }

}


export async function addTask(task) {
    try {
        const savedTask = await taskService.add(task)
        console.log('Added Task', savedTask)
        store.dispatch(getActionAddTask(savedTask))
        return savedTask
    } catch (err) {
        console.log('Cannot add task', err)
        throw err
    }
}

