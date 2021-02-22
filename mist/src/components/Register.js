import React, { useState, useMemo } from 'react'
import axios from 'axios'
import Select from 'react-select'
import countryList from 'react-select-country-list'

// React Hook
import { useHistory } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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

    const history = useHistory()

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

        let formIsValid = true

        // username validation
        if (!form.username) {
            formIsValid = false;
            error.username = "Username is required"
            setError({
                ...error
            })
        } else if (form.username.length < 6 || form.username.length > 20) {
            formIsValid = false;
            error.username = "Username must be between 6 and 20 characters"
            setError({
                ...error
            })
        }

        // email validation
        if (!form.email) {
            formIsValid = false;
            error.email = "Email is required"
            setError({
                ...error
            })
        } else if (!form.email.includes('@') || !form.email.includes('.')) {
            formIsValid = false;
            error.email = "Invalid email format"
            setError({
                ...error
            })
        }

        // password validation
        if (!form.password) {
            formIsValid = false;
            error.password = "Password is required"
            setError({
                ...error
            })
        } else if (form.password.length < 8) {
            formIsValid = false;
            error.password = "Password must be longer than 8 characters"
            setError({
                ...error
            })
        }

        // confirm password validation
        if (form.passwordC !== form.password) {
            formIsValid = false;
            error.passwordC = "Password does not match"
            setError({
                ...error
            })
        }

        // country validation
        if (country.label === undefined) {
            formIsValid = false;
            error.country = "Please select your country"
            setError({
                ...error
            })
        }

        // phone validation
        if (form.contact_no.length < 7 || form.contact_no.length > 15) {
            formIsValid = false;
            error.contact_no = "Please enter a valid phone number"
            setError({
                ...error
            })
        }

        // if everything is valid, process register
        if (formIsValid === true) {
            let username = form.username;
            let email = form.email;
            let password = form.password;
            let contact_no = form.contact_no;

            let newUser = {
                username,
                email,
                password,
                country,
                contact_no
            }

            console.log(newUser)

            await axios.post(`${api_url}/api/user/register`, newUser)

            history.push('/login')
        }
    }

    return (
        <React.Fragment>
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