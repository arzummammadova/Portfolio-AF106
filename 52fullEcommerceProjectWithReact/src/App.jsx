import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './Pages/Home'
import Register from './Pages/Auth/Register/Register'
import Login from './Pages/Auth/Login/Login'
import '../src/sass/main.scss'
import './App.css'
import Adminpanel from './Pages/Adminpanel'
import Shoulderbag from './Pages/Shoulderbag'
import Details from './components/Details'
import Wishlist from './Pages/Wishlist'
import Basket from './Pages/Basket'
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Home />
        }
        , {
          path: "/adminpanel",
          element: <Adminpanel />
        }
        ,{
          path:"/shoulderbag",
          element:<Shoulderbag/>
        }
        ,
        {
          path:"/details/:id",
          element:<Details/>
        },
        {
          path:"/wishlist",
          element:<Wishlist/>
        }
        ,{
          path:"/basket",
          element:<Basket/>
        }
      ]

    },

    {

      path: "/register",
      element: <Register />
    }
    ,
    {
      path: "/login",
      element: <Login />
    }
    

  ])
  return (
    <RouterProvider router={router}>
      <App />

    </RouterProvider>
  )
}

export default App
