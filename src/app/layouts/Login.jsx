import React, { useState, useEffect } from 'react'
import TextField from '../components/TextField'
import { validator } from '../utils/validator'
// 19
const Login = () => {
    const [data, setData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            },
            isEmail: {
                message: 'Email введен не некорректно'
            }
        },
        password: {
            isRequired: {
                message: 'Пароль обязательна для заполнения'
            },
            isCapitalSymbol: {
                message: 'Пароль должен содержать хотя бы одну заглавную букву'
            },
            isContainDigit: {
                message: 'Пароль должен содержать хотя бы одну цыфру'
            },
            min: {
                message: 'Пароль должен быть не менее 8 символов',
                value: 8
            }
        }
    }

    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
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
