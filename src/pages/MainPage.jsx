import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
    return (
        <div>
            <p>
                <Link to="/feedback">Обратная связь</Link>
            </p>
            <p>
                <Link to="/order">Оформление заказа</Link>
            </p>
        </div>
    )
}

export default MainPage
