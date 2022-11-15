import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Users from './layouts/Users'
import Login from './layouts/Login'
import Main from './layouts/Main'

function App() {
    return (
        <>
            <Switch>
                <Route path='/users' component={Users}/>
                <Route path='/login' component={Login}/>
                <Route path='/' exact component={Main}/>
                <Redirect to='/'/>
            </Switch>
        </>
    )
}

export default App
