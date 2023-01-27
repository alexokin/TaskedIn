import { useState } from "react"
import { userService } from "../services/user.service"


export function LoginSignup() {
    const [userToSet, setUserToSet] = useState(userService.getEmptyUser())
    const [isSignUp, setIsSignUp] = useState(false)


    function handleChange({ target }) {
        const { value, name: field } = target
        setUserToSet(prevUser => ({ ...prevUser, [field]: value }))
    }

    function handleSubmit(ev) {
        ev.preventDefault()
    }

    function toggleLoginSignup() {
        setIsSignUp(prevState => !prevState)
    }



    return (
        <section className="login-signup">
            <div className="logo">TaskedIn</div>

            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-header">
                    <span className="title">Log in to TaskedIn</span>
                </div>
                <div className="form-content">
                    <input type="text"
                        name="username"
                        required
                        placeholder="Enter email"
                        value={userToSet?.username}
                        onChange={handleChange}
                    />
                    <input type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={userToSet?.password}
                        onChange={handleChange}
                    />
                    <button className="btn-login"> {isSignUp ? 'Sign up' : 'Continue'}</button>
                </div>
                <hr />
                <div className="form-footer">
                    <span onClick={toggleLoginSignup}>
                        {isSignUp ? 'Already have a account? Log in' : 'Sign up for an account'}
                    </span>
                </div>

            </form>
        </section>
    )
} 