import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import Layout from './assets/components/Layout/Layout';
import './app.css'
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
        element: <AdminPanel/>,
      },
    ],
  }
]);

function App() {

  return <RouterProvider router={router} />

}

export default App;