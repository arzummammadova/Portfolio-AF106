import React, { useState, useEffect } from 'react';
import Products from './pages/Products.jsx'
import axios from 'axios';
import { Toaster } from 'react-hot-toast';


const App = () => {
    const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      const baseURL = 'https://fakestoreapi.com/products';
      const getData = async () => {
        try {
          const response = await axios.get(baseURL);
          setData(response.data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);
  return (
    <div>
      <Toaster />
      <Products data={data} setData={setData} loading={loading}/>
    </div>
  )
}

export default App
