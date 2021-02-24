import React, { useState, useMemo } from 'react'
import axios from 'axios'
import Select from 'react-select'
import countryList from 'react-select-country-list'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const api_url = 'https://8080-b965e1cc-5c95-4e82-9fbe-eb2765fb8734.ws-us03.gitpod.io'

export default function Register() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        passwordC: "",
        contact_no: "",
    })

    function updateFormField(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const [country, setCountry] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = country => {
        setCountry(country)
    }

    const [successMessage, setSuccessMessage] = useState('')

    let [error, setError] = useState({
        username: "",
        email: "",
        password: "",
        passwordC: "",
        contact_no: "",
        country: ""
    })

    async function registerAccount() {
        error.username = ""
        error.email = ""
        error.password = ""
        error.passwordC = ""
        error.contact_no = ""
        error.country = ""

        let username = form.username;
        let email = form.email;
        let password = form.password;
        let password_confirmation = form.passwordC;
        let contact_no = form.contact_no;

        let newUser = {
            username,
            email,
            password,
            password_confirmation,
            country,
            contact_no
        }

        let response = await axios.post(`${api_url}/api/user/register`, newUser)

        let messages = response.data

        if (messages !== `Your account ${username} has been created`) {
            for (let errors of messages) {
                if (errors.field === "username") {
                    error.username = errors.message
                    setError({
                        ...error
                    })
                }

                if (errors.field === "email") {
                    error.email = errors.message
                    setError({
                        ...error
                    })
                }

                if (errors.field === "password") {
                    error.password = errors.message
                    setError({
                        ...error
                    })
                }

                if (errors.field === "country") {
                    error.country = errors.message
                    setError({
                        ...error
                    })
                }

                if (errors.field === "contact_no") {
                    error.contact_no = errors.message
                    setError({
                        ...error
                    })
                }
            }
        } else {
            error.username = ""
            error.email = ""
            error.password = ""
            error.passwordC = ""
            error.contact_no = ""
            error.country = ""

            form.username = ""
            form.email = ""
            form.password = ""
            form.passwordC = ""
            form.contact_no = ""
            form.country = ""
            setSuccessMessage(messages)
        }
    }

    return (
        <React.Fragment>
            {successMessage.length > 0 &&
                <Alert variant="success">{successMessage}. You can now login to your MiST account!</Alert>
            }
            <div style={{ textAlign: 'center' }} className="mb-3">
                <h1 className="mb-3">Create Your Account</h1>
                <span>Create your own account with MiST and have your very own library of games!</span>
            </div>
            <Form>
                <Form.Group controlId='formUsername'>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type='text' name='username' placeholder='Enter username' value={form.username} onChange={updateFormField} />
                    <span style={{ color: 'red' }}>{error.username}</span>
                </Form.Group>

                <Form.Group controlId='formEmail'>
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type='email' name='email' placeholder='Enter email address' value={form.email} onChange={updateFormField} />
                    <span style={{ color: 'red' }}>{error.email}</span>
                </Form.Group>

                <Form.Group controlId='formPassword'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type='password' name='password' placeholder='Enter password' value={form.password} onChange={updateFormField} />
                    <span style={{ color: 'red' }}>{error.password}</span>
                </Form.Group>

                <Form.Group controlId='formPasswordC'>
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control type='password' name='passwordC' placeholder='Confirm password' value={form.passwordC} onChange={updateFormField} />
                    <span style={{ color: 'red' }}>{error.passwordC}</span>
                </Form.Group>

                <Form.Group controlId='formCountry' style={{ 'color': 'black' }}>
                    <Form.Label style={{ 'color': 'white' }}>Country:</Form.Label>
                    <Select options={options} name="country" value={country} onChange={changeHandler}></Select>
                    <span style={{ color: 'red' }}>{error.country}</span>
                </Form.Group>

                <Form.Group controlId='formContact'>
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type='number' name='contact_no' placeholder='Enter phone number' value={form.contact_no} onChange={updateFormField} />
                    <span style={{ color: 'red' }}>{error.contact_no}</span>
                </Form.Group>
            </Form>
            <Button variant='success' onClick={registerAccount}>Register</Button>
        </React.Fragment>
    )
}