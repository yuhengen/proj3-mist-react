import React from 'react'

// React Hook
import { useHistory } from 'react-router-dom'

export default function Register() {

    // create history object
    const history = useHistory()

    function registerAccount() {
        // make home the current active route
        history.push('/home')
    }

    return (
        <React.Fragment>
            <h1>Create Your Account</h1>
            <div>
                <label>Email:</label>
                <input type="text" name="email" />
            </div>
            <button onClick={this.registerAccount}>Register</button>
        </React.Fragment>
    )
}