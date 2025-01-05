import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import search from '../../assets/icons/search.svg';
import heart from '../../assets/icons/heart.svg';
import basket from '../../assets/icons/basket.svg';
import burger from '../../assets/icons/burger.svg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../../redux/features/productSlicer';
import { Badge, IconButton } from '@mui/material';
import { Box, Button, Modal, Typography } from '@mui/material'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { toast, ToastContainer } from 'react-toastify';
import { Password, SelectAllSharp } from '@mui/icons-material';
import { editUserInfo } from '../../redux/features/userSlice';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:'flex',
    flexDirection:'column',
    width:'40%',
    gap:'2rem'
};
const Navbar = () => {
    const [user, setUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const filteredProducts = useSelector((state) => state.product.filteredProducts);
    const basketItems = useSelector((state) => state.basket.value);
    const totalItems = basketItems.reduce((total, item) => total + item.count, 0);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [firstName, setFirstName] = useState(selectedUser ? selectedUser.firstName : "");
        const [lastName, setLastName] = useState(selectedUser ? selectedUser.lastName : "");
        const [username, setUsername] = useState(selectedUser ? selectedUser.username : "");
        const [email, setEmail] = useState(selectedUser ? selectedUser.email : "");
        const [password, setPassword] = useState(selectedUser ? selectedUser.password : "")
        const [confirmPassword, setConfirmPassword] = useState(selectedUser ? selectedUser.confirmPassword : "")
        const [gender,setGender]=useState(selectedUser? selectedUser.gender:"")
        const [data,setData]=useState(selectedUser? selectedUser.data:"")
        const [isLogin,setisLogin]=useState(selectedUser? selectedUser.isLogin:"")
        const [isAdmin,setisadmin]=useState(selectedUser? selectedUser.isAdmin:"")
    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        dispatch(searchProducts(term));
    };

    const handleOpenEdit = (user) => {
        setSelectedUser(user);
        setOpenEdit(true);
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setUsername(user.username);
        setEmail(user.email);
        setPassword(user.password);
        setConfirmPassword(user.confirmPassword);
    };
    const loginedUser = async () => {
        const response = await axios("http://localhost:3000/users");
        const islogined = response.data.find((user) => user.isLogin === true);
        setUser(islogined);
    };
    const handleEdit = () => {
        const updatedUser = {
            id: selectedUser.id,
            firstName,
            lastName,
            username,
            email,
            password: password ,
            confirmPassword: confirmPassword ,
            gender: gender || selectedUser.gender,
            data: data || selectedUser.data,
            isLogin: typeof isLogin !== "undefined" ? isLogin : selectedUser.isLogin,
            isAdmin: typeof isAdmin !== "undefined" ? isAdmin : selectedUser.isAdmin,
        };
        dispatch(editUserInfo(updatedUser));
        setOpenEdit(false);
        toast.success("Successfully edited!");
        toast.warning("Please login again!");
    };
    
    useEffect(() => {
        loginedUser();
    }, [user]);

    const logout = async () => {
        if (user.isLogin) {
            const exitUser = { ...user, isLogin: false };
            await axios.put(`http://localhost:3000/users/${user.id}`, exitUser);
            setUser(null);
        }
    };
    const handleCloseEdit = () => setOpenEdit(false);

    return (
        <div>
            <div className="header-bottom">
                <div className="container">
                    <div className="nav">
                        <div className="nav_top">
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
                                    {user.isAdmin ? (
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                <InputLabel id="demo-simple-select-helper-label">Welcome, {user.username} (Admin)</InputLabel>
                                                <Select>
                                                    <MenuItem value="">
                                                        <em>Hello, {user.username}</em>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <button onClick={logout} style={{ border: "none", backgroundColor: "transparent" }}>Logout</button>
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                            <Link style={{ fontSize: "14px" }} to="/adminpanel">Admin Panel</Link>
                                        </div>
                                    ) : (
                                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            <div>
                                              <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                <InputLabel id="demo-simple-select-helper-label">Welcome, {user.username}</InputLabel>
                                                <Select>
                                                    <MenuItem value="">
                                                        <em>Hello, {user.username}</em>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <button onClick={logout} style={{ border: "none", backgroundColor: "transparent" }}>Logout</button>
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>   
                                            </div>
                                            <div style={{ display: "flex" }} onClick={() => handleOpenEdit(user)}>
                                  <ManageAccountsIcon  /><h5>My Profile</h5>
                                </div>
                                           
                                          
                                        </div>
                                    )}



                                </div>
                            ) : (
                                <FormControl style={{ fontSize: "16px" }} sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-helper-label">Login/Register</InputLabel>
                                    <Select>
                                        <MenuItem value="">
                                            <em>Login/Register</em>
                                        </MenuItem>

                                        <MenuItem>
                                            <Link to="/login">
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                    <AccountBoxIcon /><p>Login</p>
                                                </div>
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link to="/register">
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                    <AccountBoxIcon /><p>Register</p>
                                                </div>
                                            </Link>
                                        </MenuItem>

                                    </Select>
                                </FormControl>

                            )}

                            <Link to='/wishlist'><img src={heart} alt="wishlist" className="group basket" /></Link>
                           
                            <Link to='/basket'>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">

                                    <Badge badgeContent={totalItems} color="error" style={{ fontSize: "16px" }}>
                                        <img src={basket} alt="basket" className="group" />
                                    </Badge>

                                </IconButton ></Link>
                        </div>
                        {/* <div className="burger-menu">
                            <img src={burger} alt="burger menu" />
                        </div> */}
                    </div>
                    <div className="nav-bottom">
                        <div className="nav_menu">
                            <ul className="nav_list">
                                <li className="nav_list_item"><a href="www.google.com">Evening bags</a></li>
                                <li className="nav_list_item"><Link to="/shoulderbag">Shoulder bag</Link></li>
                                <li className="nav_list_item"><Link to="/shoulderbag">Backpack</Link></li>
                                <li className="nav_list_item"><Link to="/shoulderbag">Handbag</Link></li>
                                <li className="nav_list_item"><Link to="/shoulderbag">Postman bag</Link></li>
                                <li className="nav_list_item"><Link to="/shoulderbag">Belt bags</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <Modal open={openEdit} onClose={handleCloseEdit} >
                <Box sx={style} >
                    <h3>My Profile (You can change when you want)!</h3>
                    <input style={{padding:"6px 8px"}}
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input  style={{padding:"6px 8px"}}
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input style={{padding:"6px 8px"}}
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input  style={{padding:"6px 8px"}}
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                     <input  style={{padding:"6px 8px"}}
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                       <input  style={{padding:"6px 8px"}}
                        type="password"
                        placeholder="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    
                  
                    <Button onClick={handleEdit} >Change</Button>
                </Box>
            </Modal>
            <ToastContainer />
        </div>
    );
};

export default Navbar;
