import React from 'react';
import { useFormik } from 'formik';
import { register } from '../../shemas/Registershema';
import './register.css';
import Header from '../../components/Header';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Register = () => {
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
        await axios.post ("http://localhost:3000/users",value);
        console.log(value);
        Toast.fire({
            icon: 'success',
            title: 'Success',
          })
         
        setTimeout(() => {
            action.resetForm(); 

        }, 2000);

      
    }

    const { handleChange
        , handleReset, setErrors,errors, resetForm, handleSubmit, values } = useFormik({
            initialValues: {
                name: '',
                lastname: '',
                username: '',
                email: '',
                password:'',
                confirmpassword:'',
                isLogin:false

            },
            onSubmit: (values, actions) => resetvalue(actions, values),
            validationSchema:register

        });
    return (
        <div className="register-page">
 <div className="register-section">
 <Header/>
            <div className="container">
                <h1 style={{ textAlign: "center", paddingTop: "10px" ,color:"white"}}>Sign In</h1>
                <div className="register">

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Firstname</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={handleChange}
                            value={values.name}
                        />
                        {errors.name? <span>{errors.name}</span>:null}

                        <label htmlFor="lastname">Lastname</label>
                        <input
                            id="lastname"
                            name="lastname"
                            type="text"
                            onChange={handleChange}
                            value={values.lastname}
                        />
                        {errors.lastname ? <span>{errors.lastname}</span>:null}
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
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            value={values.email}
                        />

                        {
                            errors.email ? <span>{errors.email}</span>:null
                        }
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                            value={values.password}
                        />

                        {
                            errors.password? <span>{errors.password}</span>:null
                        }
                        <label htmlFor="confirmpassword">Confirm Password *</label>
                        <input
                            id="confirmpassword"
                            name="confirmpassword"
                            type="password"
                            onChange={handleChange}
                            value={values.confirmpassword}
                        />

                        {
                            errors.confirmpassword ? <span>{errors.confirmpassword}</span>:null
                        }

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </div>
        </div>
       


    );
}

export default Register
