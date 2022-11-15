import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Users from './layouts/Users'
import Login from './layouts/Login'
import Main from './layouts/Main'
import NavBar from './components/NavBar'

function App() {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route path='/users/:userId?' component={Users}/>
                <Route path='/login' component={Login}/>
                <Route path='/' exact component={Main}/>
                <Redirect to='/'/>
            </Switch>
        </>
    )
}

export default App
