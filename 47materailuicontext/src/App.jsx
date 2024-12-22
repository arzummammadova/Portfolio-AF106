import React from 'react'
import Register from './assets/Pages/Authentication/Register'
import Login from './assets/Pages/Authentication/Login'
import Home from './assets/Pages/Authentication/Home'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

const App = () => {

  const routers = useRoutes([
    {
      path: "/", element: <Home />
    },
    {
      path: "/login", element: <Login />
    },
    {
      path: "/register", element: <Register />
    },
   
  ])
  return (
    routers
  )
}

export default function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  )


}
