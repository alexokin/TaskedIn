
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { updateBoard } from '../store/board.actions.js'

const STORAGE_KEY = 'board'
const boardStyles = [
    { backgroundColor: '#0079bf' },
    { backgroundColor: '#d29034' },
    { backgroundColor: '#519839' },
    { backgroundColor: '#b04632' },
    { backgroundColor: '#89609e' },
    { backgroundColor: '#cd5a91' }
]
const boardStylesImg = [
    {
        backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`,
        backgroundSize: 'cover',
        // backgroundRepeat: 'no - repeat'
    },
    {
        backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`,
        backgroundSize: 'cover',
        // backgroundRepeat: 'no - repeat'
    },
    {
        backgroundImage: `url('https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`,
        backgroundSize: 'cover',
        // backgroundRepeat: 'no - repeat'
    },
    {
        backgroundImage: `url('https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80                                                                           ')`,
        backgroundSize: 'cover',
        // backgroundRepeat: 'no - repeat'
    }
]

export const boardService = {
    query,
    getById,
    save,
    remove,
    getEmptyBoard,
    getDefaultFilter,
    toggleStar,
    boardStyles,
    boardStylesImg
}

window.cs = boardService

async function query(filterBy = getDefaultFilter()) {
    var boards = await storageService.query(STORAGE_KEY)
    if (filterBy.title) {
        const regex = new RegExp(filterBy.title, 'i')
        boards = boards.filter(board => regex.test(board.title))
    }
    boards.sort((board1, board2) => board1[filterBy.sortBy].localeCompare(board2[filterBy.sortBy]) * filterBy.sortDesc)
    return boards
}

function getById(boardId) {
    return storageService.get(STORAGE_KEY, boardId)
}

async function remove(boardId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, boardId)
}

async function save(board) {
    var savedBoard
    if (board._id) {
        savedBoard = await storageService.put(STORAGE_KEY, board)
    } else {
        // Later, owner is set by the backend
        //board.createdBy = userService.getLoggedinUser()
        savedBoard = await storageService.post(STORAGE_KEY, board)
    }
    return savedBoard
}

async function toggleStar(boardId){
    try {
        const board = await boardService.getById(boardId)
        board.isStarred = !board.isStarred
        await updateBoard(board)
      } catch (error) {
        console.log('Cannot change board starred status')
      }
}

function getEmptyBoard() {
    return {
        title: '',
        isStarred: false,
        archivedAt: '',
        style: { backgroundColor: 'lightgray' },
        labels: [],
        members: [],
        groups: []
    }
}

function getDefaultFilter() {
    return {
        title: '',
        sortBy: 'title',
        sortDesc: 1
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




