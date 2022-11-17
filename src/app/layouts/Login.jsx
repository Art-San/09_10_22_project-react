import React, { useState } from 'react'
// 17.11.22

const Login = () => {
    const [email, setEmail] = useState('')
    const handleChange = (e) => {
        setEmail(e.target.value)
        console.log('e', e.target.value)
    }
    return (
        <form action="">
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id='emaii'
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Пароль</label>
                <input type="password" id='password' />
            </div>
        </form>
    )
}

export default Login
