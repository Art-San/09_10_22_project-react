import React, { useState } from 'react'
import TextField from '../components/TextField'
// 18/11/22
const Login = () => {
    const [data, setData] = useState({ email: '', password: '' })
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
