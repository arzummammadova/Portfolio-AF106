import React from 'react';
import { useFormik } from 'formik';
import { login } from '../../shemas/Loginshema';
import './Login.css';
import Header from '../../components/Header';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Login = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        iconColor: 'white',
        customClass: {
          popup: 'colored-toast',
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      })

    

    const resetvalue = async(action, value) => {
       const response= await axios.get ("http://localhost:3000/users");
       const user = response.data.find(user => user.username === value.username && user.password === value.password);
       if(!user){
        Toast.fire({
            icon: 'error',
            title: 'User not found please login ',
          })
       }
       const updateUser={
        ...user,
        isLogin:true,

       }

       await axios.put(`http://localhost:3000/users/${updateUser.id}`,updateUser)
        

       
        console.log(value);
        Toast.fire({
            icon: 'success',
            title: 'Successfuly logined',
          })
         
        setTimeout(() => {
            action.resetForm(); 

        }, 2000);

      
    }

    const {handleSubmit, handleChange, setErrors,errors, resetForm, values,submitForm } = useFormik({
            initialValues: {
                username: '',
                password:'',
                isLogin:false,

            },
            onSubmit: (values, actions) => resetvalue(actions, values),
            validationSchema:login

        });
    return (
        <div className="login-page">
 <div className="login-section">
 <Header/>
            <div className="container">
                <h1 style={{ textAlign: "center", paddingTop: "100px" ,color:"white",paddingBottom:"50px"}}>Sign Up</h1>
                <div className="login">

                    <form onSubmit={handleSubmit}>
                      
                    
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            onChange={handleChange}
                            value={values.username}
                        />
                      {
                        errors.username ?<span>{errors.username}</span>:null
                      }
                      
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                            value={values.password}
                        />

                        {/* {
                            errors.password? <span>{errors.password}</span>:null
                        } */}
                    
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </div>
        </div>
       


    );
}

export default Login
