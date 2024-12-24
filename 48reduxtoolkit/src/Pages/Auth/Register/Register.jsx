import { LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material'
import { Avatar, Box, Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { register } from '../../../shemas/Registerschema';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate()
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const notify = () => toast.error(' istifadəçi mövcuddur ');
  // const success = (text) => toast.success(text);
 
  const sendData = async (values, action) => {
    const response = await axios("http://localhost:3000/users");
    const finduser = response.data.find((user) => user.username === values.username && user.password === values.password);
    if (finduser) {
      notify();
      action.resetForm()
   
    } else {
      await axios.post("http://localhost:3000/users", values);
      // navigate('/login')
      toast.success('Registered sucsessfully!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
       
      action.resetForm();
    }
  }

  const { handleChange, handleSubmit, handleReset, errors, values } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmpassword: '',
      isLogin: false,
    },
    validationSchema: register,
    onSubmit: (values, action) => {
      sendData(values, action);
    },
  });

  return (
    <div>

      <Container style={{ maxWidth: "540px" }}>
      <ToastContainer />
        <Paper style={{ backgroundColor: "#D9EAFD" }} elevation={3} sx={{ marginTop: "40px", padding: "30px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
          <Avatar>
            <LockOutlined />
          </Avatar>
          <h2 style={{ textAlign: "center" }}>Register</h2>
          <Box component='form' onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
            <TextField name='firstName' label="First Name" value={values.firstName} id='firstName' onChange={handleChange} fullWidth variant="outlined" />
            {errors.firstName ? <span className='error'>{errors.firstName}</span> : null}
            <TextField name='lastName' label="Last Name" value={values.lastName} id='lastName' onChange={handleChange} fullWidth variant="outlined" />
            {errors.lastName ? <span className='error'>{errors.lastName}</span> : null}
            <TextField label="Username" value={values.username} id='username' name='username' fullWidth onChange={handleChange} variant="outlined" />
            {errors.username ? <span className='error'>{errors.username}</span> : null}
            <TextField id="email" type='email' name='email' onChange={handleChange} value={values.email} label="Email Address" fullWidth variant="outlined" />
            {errors.email ? <span className='error'>{errors.email}</span> : null}
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="password"
                name='password'
                onChange={handleChange}
                value={values.password}
                type={showPassword ? 'text' : 'password'}
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
            </FormControl>
            {errors.password ? <span className='error'>{errors.password}</span> : null}
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
              <OutlinedInput
                id="confirmpassword"
                name='confirmpassword'
                onChange={handleChange}
                value={values.confirmpassword}
                type={showPassword ? 'text' : 'password'}
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
            </FormControl>
            {errors.confirmpassword ? <span className='error'>{errors.confirmpassword}</span> : null}
            <p style={{ marginTop: "10px" }}>Do you have an account? <Link to='/login'>Login now</Link></p>
            <Button type="submit" style={{ width: "100%", color: "white", backgroundColor: "#81BFDA" }}>Register</Button>
          </Box>
        </Paper>
      </Container>
    </div>
  )
}

export default Register
