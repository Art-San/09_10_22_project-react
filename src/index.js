import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
// Добавили роутер к приложению BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
)

// Во избежание ошибок React 18 & React Router 5 в index.js 
// компонент <React.StrictMode> также необходимо переместить внутрь 
// компонента <BrowserRouter> таким образом:

// {/* <BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// </BrowserRouter> */}
