import React from 'react'

const Login = () => {
    return (
        <form action="">
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id='emaii' />
            </div>
            <div>
                <label htmlFor="password">Пароль</label>
                <input type="password" id='password' />
            </div>
        </form>
    )
}

export default Login
