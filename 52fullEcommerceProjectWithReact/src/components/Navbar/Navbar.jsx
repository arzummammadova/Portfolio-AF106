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

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const filteredProducts = useSelector((state) => state.product.filteredProducts);
    const basketItems = useSelector((state) => state.basket.value);
    const totalItems = basketItems.reduce((total, item) => total + item.count, 0);

    // Hər input dəyişdikdə axtarışı yenilə
    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        dispatch(searchProducts(term)); // Redux action-a axtarış göndərmək
    };

    const loginedUser = async () => {
        const response = await axios("http://localhost:3000/users");
        const islogined = response.data.find((user) => user.isLogin === true);
        setUser(islogined);
    };

    useEffect(() => {
        loginedUser();
    }, []);

    const logout = async () => {
        if (user.isLogin) {
            const exitUser = { ...user, isLogin: false };
            await axios.put(`http://localhost:3000/users/${user.id}`, exitUser);
            setUser(null);
        }
    };

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
                                    onChange={handleSearchChange}  // Inputa yazarkən axtarışı yenilə
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

                                </IconButton></Link>
                        </div>
                        <div className="burger-menu">
                            <img src={burger} alt="burger menu" />
                        </div>
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


        </div>
    );
};

export default Navbar;
