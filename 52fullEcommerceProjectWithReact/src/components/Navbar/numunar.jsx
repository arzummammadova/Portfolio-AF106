import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { searchProducts } from '../../redux/features/productSlicer';
import { editUserInfo } from '../../redux/features/userSlice';
import { useFormik } from 'formik';
import { register } from '../../schema/RegisterSchema';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Badge,
  Typography,
} from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { toast, ToastContainer } from 'react-toastify';
import search from '../../assets/icons/search.svg';
import heart from '../../assets/icons/heart.svg';
import basket from '../../assets/icons/basket.svg';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.value);
  const totalItems = basketItems.reduce((total, item) => total + item.count, 0);

  const loginedUser = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      const loggedInUser = response.data.find((user) => user.isLogin === true);
      setUser(loggedInUser);
    } catch (error) {
      console.error('Error fetching logged-in user:', error);
    }
  };

  useEffect(() => {
    loginedUser();
  }, []);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    dispatch(searchProducts(term));
  };

  const handleOpenEdit = (user) => {
    setSelectedUser(user);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => setOpenEdit(false);

  const handleEdit = (values) => {
    const updatedUser = {
      id: selectedUser.id,
      ...values,
    };

    dispatch(editUserInfo(updatedUser));
    setOpenEdit(false);
    toast.success('Profile updated successfully!');
    toast.warning('Please log in again!');
  };

  const logout = async () => {
    if (user?.isLogin) {
      try {
        await axios.put(`http://localhost:3000/users/${user.id}`, {
          ...user,
          isLogin: false,
        });
        setUser(null);
        toast.info('Logged out successfully!');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: selectedUser?.firstName || '',
      lastName: selectedUser?.lastName || '',
      username: selectedUser?.username || '',
      email: selectedUser?.email || '',
      password: '',
      confirmPassword: '',
      gender: selectedUser?.gender || '',
      data: selectedUser?.data || '',
    },
    validationSchema: register,
    onSubmit: handleEdit,
  });

  return (
    <div>
      <div className="header-bottom">
        <div className="container">
          <div className="nav">
            <Link to="/">Snobella</Link>

            <div className="search-container">
              <input
                type="text"
                className="search"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
              />
              <img src={search} alt="search icon" className="searchicon" />
            </div>

            {user ? (
              <div>
                <FormControl>
                  <InputLabel>Welcome, {user.username}</InputLabel>
                  <Select>
                    <MenuItem>
                      <button
                        onClick={logout}
                        style={{ border: 'none', background: 'transparent' }}
                      >
                        Logout
                      </button>
                    </MenuItem>
                  </Select>
                </FormControl>

                <div onClick={() => handleOpenEdit(user)} style={{ display: 'flex', alignItems: 'center' }}>
                  <ManageAccountsIcon />
                  <Typography>My Profile</Typography>
                </div>
              </div>
            ) : (
              <FormControl>
                <InputLabel>Login/Register</InputLabel>
                <Select>
                  <MenuItem>
                    <Link to="/login">Login</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/register">Register</Link>
                  </MenuItem>
                </Select>
              </FormControl>
            )}

            <Link to="/wishlist">
              <img src={heart} alt="wishlist" />
            </Link>

            <Link to="/basket">
              <IconButton>
                <Badge badgeContent={totalItems} color="error">
                  <img src={basket} alt="basket" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </div>
      </div>

      <Modal open={openEdit} onClose={handleCloseEdit}>
        <Box sx={modalStyle}>
          <form onSubmit={formik.handleSubmit}>
            <Typography variant="h6">Edit Profile</Typography>

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            {formik.errors.firstName && <Typography>{formik.errors.firstName}</Typography>}

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            {formik.errors.lastName && <Typography>{formik.errors.lastName}</Typography>}

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            {formik.errors.username && <Typography>{formik.errors.username}</Typography>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && <Typography>{formik.errors.email}</Typography>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && <Typography>{formik.errors.password}</Typography>}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            {formik.errors.confirmPassword && <Typography>{formik.errors.confirmPassword}</Typography>}

            <Button type="submit">Save Changes</Button>
          </form>
        </Box>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default Navbar;