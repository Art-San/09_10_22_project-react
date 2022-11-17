import React, { useState } from 'react'
// 17.11.22
const Login = () => {
    const [data, setData] = useState({ email: '', password: '' })
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')// ему такой метод не нравится
    const handleChange = ({ target }) => {
        // setEmail(e.target.value)
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    return (
        <form action="">
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
            <div>
                <div>
                    <label htmlFor="radio1">Radio 1</label>
                    <input type="radio" id='radio1' name='radio'/>
                </div>
                <div>
                    <label htmlFor="radio2">Radio 2</label>
                    <input type="radio" id='radio2' name='radio'/>
                </div>
            </div>
        </form>
    )
}

export default Login
