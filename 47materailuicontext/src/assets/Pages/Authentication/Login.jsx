import { LockOutlined } from '@mui/icons-material'
import { Avatar, Container, Paper, Grid, Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './style.css'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'

import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header'
import { login } from '../../../shemas/Loginshemax'
import axios from 'axios'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleMouseUpPassword = (event) => {
    event.preventDefault()
  }

  const resetvalue = async (action, value) => {
    try {
      const response = await axios.get('http://localhost:3000/users')
      const user = response.data.find(
        (user) => user.username === value.username && user.password === value.password
      )

      if (!user) {
        Swal.fire({
          icon: 'error',
          title: 'User not found. Please check your credentials.',
        })
      } else {
        const updateUser = {
          ...user,
          isLogin: true,
        }

        await axios.put(`http://localhost:3000/users/${updateUser.id}`, updateUser)
        Swal.fire({
          icon: 'success',
          title: 'Successfully logged in!',
        })

        setTimeout(() => {
          action.resetForm()
        }, 2000)
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'An error occurred while processing your request.',
      })
    }
  }

  const { handleSubmit, handleChange, setErrors, errors, resetForm, values, submitForm } = useFormik({
    initialValues: {
      username: '',
      password: '',
      isLogin: false,
    },
    onSubmit: (values, actions) => resetvalue(actions, values),
    validationSchema: login,
  })

  return (
    <div>
      <Header />
      <Container maxWidth="xs">
        <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
          <Avatar
            sx={{
              mx: 'auto',
              mb: 1,
              bgcolor: '#A888B5',
            }}
          >
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>
            <TextField
              placeholder="Enter your username"
              required
              autoFocus
              onChange={handleChange}
              value={values.username}
              name="username"
              sx={{ mb: 2, width: '100%' }}
            />
            {errors.username ? <span style={{ color: 'red' }}>{errors.username}</span> : null}

            <FormControl sx={{ mt: 2, width: '100%', mb: 3 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'hide the password' : 'display the password'}
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

            <Button type="submit" variant="contained" sx={{ bgcolor: '#A888B5', width: '100%' }}>
              Sign in
            </Button>
          </Box>
          <Grid item variant="contained" sx={{ display: 'block', mt: 2, textAlign: 'center' }}>
            Don't have an account?{' '}
            <Link to="/register">
              Sign up
            </Link>
          </Grid>
        </Paper>
      </Container>
    </div>
  )
}

export default Login
