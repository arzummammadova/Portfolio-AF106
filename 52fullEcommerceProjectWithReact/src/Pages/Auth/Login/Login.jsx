import React from 'react';
import './Login.css';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../schema/LoginSchema';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
const Login = () => {
    const navigate = useNavigate();

    const { handleChange, resetForm, errors, values, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
            isLogin: false,
        },
        onSubmit: (values, action) => {
            loginData(values, action);
        },
        validationSchema: login,
    });

    const loginData = async (values, action) => {
        console.log("Attempting login...");

        const response = await axios("http://localhost:3000/users");
        const existUser = response.data.find(
            (user) => user.email === values.email && user.password === values.password
        );

        if (existUser) {
           
            const updateUser = {
                ...existUser,
                isLogin: true,
            };

            await axios.patch(`http://localhost:3000/users/${existUser.id}`, updateUser);
            toast.success("registration successfully")
            setTimeout(() => {
                navigate("/"); 
            }, 2000);
           
        } else {
            toast.error("Incorrect email or password.");
        }
    };

    return (
        <div className="flex-container">
            <div className="form-container">
                <div id="form-container" className="form-content">
                    <h3 id="form-title">Login</h3>
                    <p id="form-description">Please enter your details to login or register.</p>
                    <form id="login-form" className="form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="login-email" className="label">Email</label>
                            <input
                                type="email"
                                className="input"
                                placeholder="Email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div>
                            <label htmlFor="login-password" className="label">Password</label>
                            <input
                                type="password"
                                id="login-password"
                                name="password"
                                className="input"
                                placeholder="Password"
                                onChange={handleChange}
                                value={values.password}
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                        <button type="submit" className="submit-button">Login</button>
                        <div className="tabs">
                            <Link to="/register">Not an account?</Link>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;
