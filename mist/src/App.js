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
import Container from 'react-bootstrap/Container'

import Home from './components/Home'
import Profile from './components/Profile'
import Store from './components/Store'
import About from './components/About'
import Library from './components/Library'
import Login from './components/Login'

function App() {
    return (

        <div style={{
            'backgroundImage': 'url("https://wallpaperaccess.com/full/800244.jpg")',
            'backgroundSize': 'cover',
            'backgroundPosition': 'center',
            'backgroundRepeat': 'no-repeat',
            'height': '100vh',
            'width': '100vw',
            'zIndex': '-1'
        }}>
            <Router>
                <Navbar bg="dark" variant='dark' expand="lg">
                    <Navbar.Brand as={Link} to="/"><img src={require('./images/mist-logo.png').default} alt='mistlogo' height='70px' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/store">STORE</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                            <NavDropdown title="USERNAME" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/library">LIBRARY</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/profile">PROFILE</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">LOGOUT</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container style={{ 'color': 'white' }}>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/store'>
                            <Store />
                        </Route>
                        <Route exact path='/about'>
                            <About />
                        </Route>
                        <Route exact path='/library'>
                            <Library />
                        </Route>
                        <Route exact path='/profile'>
                            <Profile />
                        </Route>
                        <Route exact path='/login'>
                            <Login />
                        </Route>
                    </Switch>
                </Container>
            </Router >
        </div>
    )
}

export default App;
