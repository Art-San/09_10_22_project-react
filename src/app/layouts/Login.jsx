import React, { useState } from 'react'
import TextField from '../components/TextField'
// 17.11.22
const Login = () => {
    const [data, setData] = useState({ email: '', password: '' })
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    return (
        <form action="">
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
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id='emaii'
                    name='email'
                    value={data.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Пароль</label>
                <input
                    type="password"
                    id='password'
                    name='password'
                    value={data.password}
                    onChange={handleChange}/>
            </div>
        </form>
    )
}

export default Login
