import { AccountCircle, LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material'
import { Avatar, Box, Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  function handleSubmit() {

    console.log("login")

  }
  return (
    <div>
      <Container style={{maxWidth:"540px"}} >
        <Paper style={{ backgroundColor: "#D9EAFD" }} elevation={3} sx={{ marginTop: "40px", padding: "30px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
          <Avatar>
            <LockOutlined />

          </Avatar>
          <h2 style={{ textAlign: "center" }}>Register</h2>

          <Box component='form' onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
            <TextField id="outlined-basic" label="add name" fullWidth variant="outlined" />
            <TextField id="outlined-basic" label="add lastname" fullWidth variant="outlined" />

            <TextField id="outlined-basic" label="add username" fullWidth variant="outlined" />
            <TextField id="outlined-basic" type='email'
              label="add mail address" fullWidth variant="outlined" />
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? 'hide the password' : 'display the password'
                      }
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

            <p style={{ marginTop: "10px" }}>You did't have an account? <Link to='/login'>Register now</Link></p>
            <Button type="submit" style={{ width: "100%", color: "white", backgroundColor: "#81BFDA"}}>Login</Button>
          </Box>
        </Paper>
      </Container>
    </div>
  )
}

export default Register
