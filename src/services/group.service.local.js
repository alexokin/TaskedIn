
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { boardService } from './board.service.local.js'
import { updateBoard } from '../store/board.actions.js'

const STORAGE_KEY = 'board'

export const groupService = {
    query,
    getById,
    save,
    remove,
    getEmptyGroup,
    getGroupTitle,
    getDefaultFilter
}

window.cs = groupService

async function query(boardId, filter = getDefaultFilter()) {
    try {
        const board = await storageService.get(STORAGE_KEY, boardId)
        const regex = new RegExp(filter.keyword, 'i')
        return board.groups.filter(group => regex.test(group.title))
    } catch (err) {
        throw err
    }
}

async function getById(boardId, groupId) {
    try {
        const board = await storageService.get(STORAGE_KEY, boardId)
        const group = board.groups.find(group => group._id === groupId)
        return group
    } catch (err) {
        throw err
    }
}

async function remove(boardId, groupId) {
    // throw new Error('Nope')
    try {
        const board = await storageService.get(STORAGE_KEY, boardId)
        board.groups = board.groups.filter(group => group._id !== groupId)
        await storageService.put(STORAGE_KEY, board)
        updateBoard(board)
    } catch (err) {
        throw err
    }
}

async function save(boardId, group) {
    try {
        const board = await boardService.getById(boardId)
        if (group._id) {
            board.groups = board.groups.map(currGroup => (currGroup._id === group._id) ? group : currGroup)
        } else {
            // Later, owner is set by the backend
            //group.createdBy = userService.getLoggedinUser()
            group._id = utilService.makeId()
            board.groups.push(group)
        }
        await storageService.put(STORAGE_KEY, board)
        updateBoard(board)
        return group
    } catch (err) {
        throw err
    }

}

async function getGroupTitle(boardId, groupId) {
    const group = await groupService.getById(boardId, groupId)
    const groupTitle = group.title
    return groupTitle
}

function getDefaultFilter() {
    return {
        keyword: ''
    }
}

function getEmptyGroup() {
    return {
        title: '',
        archivedAt: '',
        style: {},
        tasks: []
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




