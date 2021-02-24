import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { useHistory } from "react-router-dom";

import '../css/styles.css'

export default function Login(props) {
    const history = useHistory();

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })

    function updateFormField(event) {
        setLoginForm({
            ...loginForm,
            [event.target.name]: event.target.value
        })
    }

    const [error, setError] = useState({
        username: "",
        password: ""
    })

    const handleClose = () => props.onHide()

    const processLogin = () =>{
        handleClose()
        history.push('/')
    }

    const toRegister = () =>{
        handleClose()
        history.push('/register')
    }

    return (
        <React.Fragment>
            <Modal {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered className="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        SIGN IN
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='text-center m-3'>
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type='text' name='username' placeholder='Enter username' value={loginForm.username} onChange={updateFormField} />
                        <span style={{ color: 'red' }}>{error.username}</span>

                        <Form.Label className='mt-3'>Password:</Form.Label>
                        <Form.Control type='password' name='password' placeholder='Enter password' value={loginForm.password} onChange={updateFormField} />
                        <span style={{ color: 'red' }}>{error.password}</span>
                    </Form>
                    <div className="m-3 text-center">
                        <Button onClick={processLogin} variant='primary' className='m-2'>Login</Button>
                        <Button onClick={toRegister} variant='warning' className='m-2'>Register</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}