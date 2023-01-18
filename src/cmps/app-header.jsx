import { Link, NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux'
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { LoginSignup } from '../pages/login-signup.jsx'

export function AppHeader() {

    return (
        <header className="header-main">
                <a href="" className='a-logo'><img src={require(`../assets/img/trello-logo.png`)} alt="trello logo" className="header-nav-logo"/></a>
                <div className="home-page-nav-btns">
                    <a href="" className="login-btn">Log in</a>
                    <a href="" className="try-trello-btn">Get Trello for free</a>
                </div>
        </header>
    )
}