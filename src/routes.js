import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { BoardIndex } from './pages/board-index'
import { Board } from "./cmps/board.jsx";

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home 🏠',
    },
    {
        path: '/board',
        component: <BoardIndex />,
        label: 'Boards'
    },
    {
        path: '/board/:boardId',
        component: <Board />,
        label: 'Board'
    },
    {
        path: 'about',
        component: <AboutUs />,
        label: 'About us'
    },
]

export default routes