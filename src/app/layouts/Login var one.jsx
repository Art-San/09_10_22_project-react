import React, { useState, useEffect } from 'react'
import TextField from '../components/TextField'

const Login = () => {
    const [data, setData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState()
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    useEffect(() => {
        validate()
    }, [data])
    const validate = () => {
        const errors = {}
        for (const fieldName in data) {
            if (data[fieldName].trim() === '') {
                errors[fieldName] = `${fieldName} обязательно для заполнения`
            }
        }
        setErrors(errors)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validate()
        if (Object.keys(errors).length !== 0) return
        console.log('data', data)
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label='Электронная почта'
                name='email'
                value={data.email}
                onChange={handleChange}
            />
            <TextField
                label='Пароль'
                type='password'
                name="password"
                value={data.password}
                onChange={handleChange}
            />
            {/* <button>Submit</button>  */}
            <button type='submit'>Submit</button>
            <button type='button'>Submit</button>
        </form>
    )
}

export default Login
