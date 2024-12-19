import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/Authentication/Login'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Register from './Pages/Authentication/Register'
const App = () => {

const routes=useRoutes([
 {path:'/',element:<Home/>},
 {path:'/login',element:<Login/>},
 {path:'/register',element:<Register/>}
])
  return routes;
}

export default function MainApp(){
  return (
    <Router>
      <App/>
    </Router>
  )
}
