import { LockOutlined } from '@mui/icons-material';
import { Avatar, Container, Paper, Grid, Box, Button, TextField, Typography, FormHelperText } from '@mui/material';
import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { register } from '../../../shemas/Registershema';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Header from '../../../components/Header';
import axios from 'axios';
import Swal from 'sweetalert2';
import './style.css';

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
  });

  const resetValue = async (action, value) => {
    await axios.post('http://localhost:3000/users', value);
    console.log(value);
    Toast.fire({
      icon: 'success',
      title: 'Registration Successful',
    });

    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };

  const { handleChange, handleSubmit, setErrors, errors, resetForm, values } = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
      isLogin: false,
    },
    onSubmit: (values, actions) => resetValue(actions, values),
    validationSchema: register,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Header />
      <Container maxWidth="xs">
        <Paper elevation={10} sx={{ marginTop: 1, padding: 2 }}>
          <Avatar sx={{ mx: 'auto', mb: 1, bgcolor: '#A888B5' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              placeholder="Enter your first name"
              onChange={handleChange}
              id="name"
              name="name"
              type="text"
              value={values.name}
              required
              autoFocus
              sx={{ mb: 1, width: '100%' }}
              error={!!errors.name}
              helperText={errors.name || ''}
            />

            <TextField
              placeholder="Enter your last name"
              onChange={handleChange}
              id="lastname"
              name="lastname"
              type="text"
              value={values.lastname}
              required
              sx={{ mb: 1, width: '100%' }}
              error={!!errors.lastname}
              helperText={errors.lastname || ''}
            />

            <TextField
              placeholder="Enter your username"
              onChange={handleChange}
              id="username"
              name="username"
              type="text"
              value={values.username}
              required
              sx={{ mb: 1, width: '100%' }}
              error={!!errors.username}
              helperText={errors.username || ''}
            />

            <TextField
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              id="email"
              name="email"
              value={values.email}
              required
              sx={{ mb: 1, width: '100%' }}
              error={!!errors.email}
              helperText={errors.email || ''}
            />

            <FormControl sx={{ mb: 1, width: '100%' }} variant="outlined" error={!!errors.password}>
              <InputLabel htmlFor="outlined-adornment-password">Enter your Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {errors.password && <FormHelperText>{errors.password}</FormHelperText>}
            </FormControl>

            <FormControl sx={{ mb: 1, width: '100%' }} variant="outlined" error={!!errors.confirmpassword}>
              <InputLabel htmlFor="outlined-adornment-confirmpassword">Confirm Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-confirmpassword"
                type={showPassword ? 'text' : 'password'}
                name="confirmpassword"
                value={values.confirmpassword}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
              {errors.confirmpassword && <FormHelperText>{errors.confirmpassword}</FormHelperText>}
            </FormControl>

            <Button type="submit" fullWidth variant="contained" sx={{ bgcolor: '#A888B5' }}>
              Sign Up
            </Button>
          </Box>
          <Grid item variant="contained" sx={{ display: 'block', mt: 2, textAlign: 'center' }}>
            Already have an account?
            <Link to="/login">Sign in now</Link>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Register;
