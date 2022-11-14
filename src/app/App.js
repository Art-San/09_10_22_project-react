import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './layouts/Login'
import Main from './layouts/Main'
import Users from './layouts/Users'

function App() {
    return (
        <Switch>
            <Route path='/users' component={Users}/>
            <Route path='/login' component={Login}/>
            <Route path='/' exact component={Main}/>
            <Redirect to='/'/>
        </Switch>
    )
}
export default App
