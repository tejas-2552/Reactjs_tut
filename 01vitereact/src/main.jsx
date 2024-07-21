import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const user = React.createElement(
    'a',
    {
        href : 'https://google.com',
        target : '_blank'
    },
    "Click me"
)

ReactDOM.createRoot(document.getElementById('root')).render(
    user
)
