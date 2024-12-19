import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Loginregister = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios(`http://localhost:3000/users`);
      const isLogginedUser = response.data.find(user => user.isLogin);
      setUser(isLogginedUser)
    }
    catch {
      console.error("not found");

    }
  }

  const logout = async () => {
    if (user) {
      try {
        const userslogout = { ...user, isLogin: false };
        await axios.put(`http://localhost:3000/users/${user.id}`, userslogout)
        setUser(null); 
      }
      catch {
       console.error("not found")
      }

    }


  }

  useEffect(() => {
    
    fetchUser();
  }, []);

  // console.log(fetchUser())
  return (
    <div>

      {
        user ?  (

          <DropdownButton  id="dropdown-basic-button"  title={user.name}>
            <ul style={{ display: "block" }}>
              <li style={{ padding: "10px 5px" }}>
                <button  onClick={logout}>Logout</button>
              </li>

            </ul>


          </DropdownButton>
        ):(<DropdownButton id="dropdown-basic-button" title="Sinup/Signin">
          <ul style={{ display: "block" }}>
            <li style={{ padding: "10px 5px" }}>
              <Link to="/login">Sing up</Link>
            </li>
            <li style={{ padding: "10px 5px" }}>
              <Link to="/register" >Sign in</Link>
            </li>
          </ul>


        </DropdownButton >) 
      }






    </div>



  )
}

export default Loginregister
