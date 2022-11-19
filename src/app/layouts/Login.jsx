import React, { useState, useEffect } from 'react'
import TextField from '../components/TextField'
// 19.11.22
const Login = () => {
    const [data, setData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})
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
        return Object.keys(errors).length === 0 || false
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        console.log('isValid', isValid)
        if (!isValid) return
        console.log('data', data)
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label='Электронная почта'
                name='email'
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label='Пароль'
                type='password'
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            {/* <button>Submit</button>  */}
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login
