import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { useHistory } from "react-router-dom";

import '../css/styles.css'
import axios from 'axios';

const api_url = 'https://8080-b965e1cc-5c95-4e82-9fbe-eb2765fb8734.ws-us03.gitpod.io'

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

    const [errorMessage, setErrorMessage] = useState('')

    const handleClose = () => {
        setErrorMessage('')
        setLoginForm({
            username: "",
            password: ""
        })
        props.onHide()
    }

    const processLogin = async () => {
        setErrorMessage('')

        let username = loginForm.username
        let password = loginForm.password

        let loginUser = {
            username,
            password
        }

        let response = await axios.post(`${api_url}/api/user/login`, loginUser)

        let loginResponse = response.data

        if (!loginResponse.token) {
            console.log(loginResponse)
            setErrorMessage(loginResponse)
        } else {
            const loginToken = loginResponse
            localStorage.setItem('loginToken', loginToken.token)
            console.log(loginToken.token)
            handleClose()
        }
    }

    const toRegister = () => {
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

                        <Form.Label className='mt-3'>Password:</Form.Label>
                        <Form.Control className='mb-3' type='password' name='password' placeholder='Enter password' value={loginForm.password} onChange={updateFormField} />
                        <span style={{ color: 'red' }}>{errorMessage}</span>
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