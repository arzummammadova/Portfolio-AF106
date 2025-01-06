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
import Users from './Pages/Users'
import AdminProtectedRoute from './AdminProtectedRoute'
import Notauthorized from './Pages/Notauthorized'

const App = () => {
  const isAdmin = true

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/adminpanel',
          element: (
            <AdminProtectedRoute isAdmin={isAdmin}>
              <Adminpanel />
            </AdminProtectedRoute>
          ),
        },
        {
          path: '/shoulderbag',
          element: <Shoulderbag />,
        },
        {
          path: '/details/:id',
          element: <Details />,
        },
        {
          path: '/wishlist',
          element: <Wishlist />,
        },
        {
          path: '/basket',
          element: <Basket />,
        },
        {
          path: '/users',
          element: <Users />,
        },
      ],
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/notauthorized',
      element: <Notauthorized/>, 
    },
  ])

  return <RouterProvider router={router} />
}

export default App
