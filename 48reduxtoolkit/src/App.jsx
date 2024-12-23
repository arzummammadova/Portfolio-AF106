import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Login from './Pages/Auth/Login/Login'
import Register from './Pages/Auth/Register/Register'
import './App.css'
const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>
    },
    {
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/contact",
          element:<Contact/>

        },
        {
          path:"/product",
          element:<Product/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }

      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
      
    
  )
}

export default App
