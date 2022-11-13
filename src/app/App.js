import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Users from './layouts/Users'
import Login from './layouts/Login'
import Main from './layouts/Main'

function App() {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path='/login' exact component={Login} />
                <Route path='/users/:userId?' exact component={Users} />
            </Switch>
        </>
    )
}

export default App
