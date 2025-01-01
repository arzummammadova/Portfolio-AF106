import React from 'react';
import './Register.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { register } from '../../../schema/RegisterSchema';

const Register = () => {
  const sendData = async (values, action) => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      const findUser = response.data.find((user) => user.email === values.email);

      if (findUser) {
        alert('This email is already registered.');
        action.resetForm();
      } else {
        const newUser = {
          ...values,
          isLogin: false,
          isAdmin: response.data.length === 0,
        };

        await axios.post('http://localhost:3000/users', newUser);
        alert('Registration successful!');
        action.resetForm();
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
    },
    validationSchema: register,
    onSubmit: (values, action) => {
      sendData(values, action);
    },
  });

  return (
    <div className="flex-container">
      <div className="form-container">
        <h3 className="form-title">Register</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label className="label">Username</label>
            <input
              type="text"
              name="username"
              className="input"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>

          <div>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div>
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div>
            <label className="label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="input"
              placeholder="Confirm your password"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>

          <div>
            <label className="label">Gender</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={values.gender === 'male'}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={values.gender === 'female'}
                />
                Female
              </label>
            </div>
            {errors.gender && <span className="error">{errors.gender}</span>}
          </div>

          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
