import React, { useState, useEffect } from 'react'
import './css/styles.css'

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

// ROUTES
import Home from './components/Home'
import Profile from './components/Profile'
import Store from './components/Store'
import About from './components/About'
import Library from './components/Library'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'

function App() {
    const [modalShow, showLogin] = React.useState(false);

    const [state, setState] = useState({
        token: ""
    })

    useEffect(() => {
        if (!state.token) {
            setState({
                token: localStorage.getItem('loginToken')
            })
        }

        console.log(state.token)
    })

    return (
        <div style={{
            'backgroundImage': 'url("https://wallpapercave.com/wp/wp2635955.jpg")',
            'backgroundSize': 'cover',
            'backgroundPosition': 'center',
            'backgroundRepeat': 'no-repeat',
            'zIndex': '-1'
        }}>
            <Router>
                <Navbar bg="dark" variant='dark' expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/" className="ml-3 mr-3"><img src={require('./images/mist-logo.png').default} alt='mistlogo' height='70px' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/store" className="ml-3 mr-3">STORE</Nav.Link>
                                <Nav.Link as={Link} to="/about" className="ml-3 mr-3">ABOUT</Nav.Link>
                                <NavDropdown title="USERNAME" id="basic-nav-dropdown" className="ml-3 mr-3">
                                    <NavDropdown.Item as={Link} to="/library" bg="dark" variant='dark'>LIBRARY</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/profile">PROFILE</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">LOGOUT</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link onClick={() => showLogin(true)} className="ml-3 mr-3">LOGIN</Nav.Link>
                                <Nav.Link as={Link} to="/register" className="ml-3 mr-3">REGISTER</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container style={{
                    'color': 'white',
                    'padding': '50px',
                    'backgroundColor': 'rgba(0, 0, 0, 0.5)'
                }}>
                    <Login show={modalShow} onHide={() => showLogin(false)} />
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
                        <Route exact path='/register'>
                            <Register />
                        </Route>
                    </Switch>
                </Container>
                <Footer />
            </Router >
        </div>
    )
}

export default App;
