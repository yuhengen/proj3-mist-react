import React from 'react'
import './css/style.css'

// import react router 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Home from './components/Home'
import Profile from './components/Profile'

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/profile'>
                    <Profile />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
