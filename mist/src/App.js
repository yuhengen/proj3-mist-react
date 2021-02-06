import React from 'react'
import './css/style.css'

// import react router 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

// bootstrap
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Home from './components/Home'
import Profile from './components/Profile'

function App() {
    return (
        <Router>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Navbar.Brand><Link to='/'><img src={require('./images/mist-logo.png').default} alt='mistlogo' height='70px'/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
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
