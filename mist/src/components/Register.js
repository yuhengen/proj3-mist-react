import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

// React Hook
import { useHistory } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Register() {
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        passwordC: "",
        contact_no: ""
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

    function registerAccount() {
        history.push('/login')
    }

    return (
        <React.Fragment>
            <h1 className="mt-3 mb-3" style={{textAlign: 'center'}}>Create Your Account</h1>
            <Form>
                <Form.Group controlId='formEmail'>
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type='email' name='email' placeholder='Enter email address' value={form.email} onChange={updateFormField} />
                </Form.Group>

                <Form.Group controlId='formUsername'>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type='text' name='username' placeholder='Enter username' value={form.username} onChange={updateFormField} />
                </Form.Group>

                <Form.Group controlId='formPassword'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type='password' name='password' placeholder='Enter password' value={form.password} onChange={updateFormField} />
                </Form.Group>

                <Form.Group controlId='formPasswordC'>
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control type='password' name='passwordC' placeholder='Confirm password' value={form.passwordC} onChange={updateFormField} />
                </Form.Group>

                <Form.Group controlId='formCountry' style={{ 'color': 'black' }}>
                    <Form.Label style={{ 'color': 'white' }}>Country:</Form.Label>
                    <Select options={options} name="country" value={country} onChange={changeHandler}></Select>
                </Form.Group>

                <Form.Group controlId='formContact'>
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type='number' name='contact_no' placeholder='Enter phone number' value={form.contact_no} onChange={updateFormField} />
                </Form.Group>
            </Form>
            <Button variant='success' onClick={registerAccount}>Register</Button>
        </React.Fragment>
    )
}