import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "./Layout.jsx"
import Home from './components/Home/Home.jsx'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children : [
      {
        path:"",
        element:<Home />
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
