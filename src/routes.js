import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { BoardIndex } from './pages/board-index'
import {BoardDetails} from './cmps/board-details.jsx';

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Trello 🏠',
    },
    {
        path: '/workspace',
        component: <BoardIndex />,
        label: 'Workspace'
    },
    {
        path: '/board/:boardId',
        component: <BoardDetails />,
        label: 'Board'
    }
    
]

export default routes