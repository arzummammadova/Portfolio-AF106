import React from 'react'
import { AccountCircle, LockOutlined, Password, PublicTwoTone, Visibility, VisibilityOff } from '@mui/icons-material'
import { Avatar, Box, Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField } from '@mui/material'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { login } from '../../../shemas/Loginshemax';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
   
    const navigate=useNavigate()
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    const { handleSubmit, handleChange, handleReset, errors, error, values } = useFormik({
        initialValues: {
            username: '',
            password: '',
            isLogin: false,
        },

        onSubmit: (values, actions) => {
            getnewUser(values, actions);
        },
        validationSchema: login,

    });
    const getnewUser = async (values, actions) => {

        const response = await axios.get("http://localhost:3000/users");
        const user = response.data.find((user) => user.username === values.username && user.password == values.password)

        if (user) {
            navigate('/')

            const update = {
                ...user,
                isLogin: true
            }
            await axios.put(`http://localhost:3000/users/${user.id}`, update)
        }
        else {
           actions.resetForm();
            toast.error('Istifadəçi tapılmadı!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            
             
        }

      

    }
 

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Container style={{ maxWidth: "540px" }} >
                <Paper style={{ backgroundColor: "#D9EAFD" }} elevation={3} sx={{ marginTop: "80px", padding: "30px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
                    <Avatar>
                        <LockOutlined />

                    </Avatar>
                    <h2 style={{ textAlign: "center" }}>Login</h2>

                    <Box component='form' onSubmit={handleSubmit} style={{ width: "100%" }}>
                        <TextField label="add username" fullWidth

                            name="username" id="username"
                            variant="outlined" value={values.username} onChange={handleChange} />
                        {
                            errors.username ? <span className='error'>{errors.username}</span> : null
                        }
                        <FormControl sx={{ mt: 5, width: "100%" }} variant="outlined">
                            <InputLabel   >Password</InputLabel>

                            <OutlinedInput
                                id="password"
                                name="password" onChange={handleChange} value={values.password}


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
                            /> {
                                errors.password ? <span className='error'>{errors.password}</span> : null
                            }
                        </FormControl>

                        <p style={{ marginTop: "10px" }}> have an account? <Link to='/register'>Login now</Link></p>
                        <Button type="submit" style={{ width: "100%", color: "white", backgroundColor: "#81BFDA", marginTop: "20px" }}>Login</Button>
                    </Box>
                </Paper>
            </Container>
        </div>
    )
}

export default Login
