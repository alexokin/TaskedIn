import { Link, NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux'
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { LoginSignup } from '../pages/login-signup.jsx'

export function AppHeader() {

    return (
        <header className="home-page-header-main">
            <nav className="home-page-nav">
                <img src="../assets/img/trello-logo.png" alt="trello logo" className="home-page-nav-logo"/>
                <div className="home-page-nav-btns">
                    <button className="login-btn"></button>
                    <button className="try-trello-btn"></button>
                </div>
            </nav>
        </header>
    )
}










/* export function AppHeader() {

    return (
        <header className="app-header">
            <nav>
                {routes.map(route => <NavLink key={route.path} to={route.path}>{route.label}</NavLink>)}
            </nav>
            
        </header>
    )
} */