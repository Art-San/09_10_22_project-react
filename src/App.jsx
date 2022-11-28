import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage'
import FeedbackPage from './pages/FeedbackPage'
import OrderPage from './pages/OrderPage'
const App = () => {
    return (
        <div className="container mt-4">
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/feedback" component={FeedbackPage} />
                <Route path="/order" component={OrderPage} />
            </Switch>
        </div>
    )
}

export default App
