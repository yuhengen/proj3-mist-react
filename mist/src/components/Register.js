import React, { useState } from 'react'

// React Hook
import { useHistory } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import { Select2 } from 'select2-react-component'

export default function Register() {
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        passwordC: "",
        country: ""
    })

    function updateFormField(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    let history = useHistory()

    function registerAccount() {
        history.push('/home')
    }

    return (
        <React.Fragment>
            <h1>Create Your Account</h1>
            <Form>
                <Form.Group controlId='formEmail'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' name='email' placeholder='Enter email address' value={form.email} onChange={updateFormField} />
                    <Form.Text className='text-muted' style={{ 'color': 'white' }}>
                        Email required for verification. We will not share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId='formUsername'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' name='username' placeholder='Enter username' value={form.username} onChange={updateFormField} />
                </Form.Group>

                <Form.Group controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' placeholder='Enter password' value={form.password} onChange={updateFormField} />
                </Form.Group>

                <Form.Group controlId='formPasswordC'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' name='passwordC' placeholder='Confirm password' value={form.passwordC} onChange={updateFormField} />
                </Form.Group>

                {/* <Form.Group controlId='formCountry'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Select2 data={this.data} value={this.value} update={value => this.update(value)}></Select2>
                    </Form.Group> */}

                <Form.Group controlId='formCountry'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type='country' name='country' placeholder='Select Country' value={form.country} onChange={updateFormField} />
                </Form.Group>
            </Form>
            <button onClick={registerAccount}>Register</button>
        </React.Fragment>
    )
}