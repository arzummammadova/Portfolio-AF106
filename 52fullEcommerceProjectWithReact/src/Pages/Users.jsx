import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUserInfo, fetchUsers, makeAdmin, searchUser, showAllAdmin, sortNameAZ, sortNamebyZA } from '../redux/features/userSlice'
import { Box, Button, Modal, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import { toast, ToastContainer } from 'react-toastify';

import { Link } from 'react-router-dom';
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
};
const Users = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [openInfo, setOpenInfo] = React.useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const handleCloseInfo = () => setOpenInfo(false);
    const users = useSelector((state) => state.user.users)
    const handleOpenInfo = (user) => { setOpenInfo(true); setSelectedUser(user) }
    // edit ucun olandi 
    const [openEdit, setOpenEdit] = React.useState(false);

    const [firstName, setFirstName] = useState(selectedUser ? selectedUser.firstName : "");
    const [lastName, setLastName] = useState(selectedUser ? selectedUser.lastName : "");
    const [username, setUsername] = useState(selectedUser ? selectedUser.username : "");
    const [email, setEmail] = useState(selectedUser ? selectedUser.email : "");

    const handleOpenEdit = (user) => {
        setSelectedUser(user);
        setOpenEdit(true);
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setUsername(user.username);
        setEmail(user.email);
    };

    const handleEdit = () => {

        const updatedUser = {
            id: selectedUser.id,
            firstName,
            lastName,
            username,
            email,
        };
        dispatch(editUserInfo(updatedUser));
        setOpenEdit(false);
        toast.success("edited sucsesffuly")
    };
    const handleCloseEdit = () => setOpenEdit(false);
    useEffect(() => {
        if (selectedUser) {
            setFirstName(selectedUser.firstName);
            setLastName(selectedUser.lastName);
            setUsername(selectedUser.username);
            setEmail(selectedUser.email);
        }
    }, [selectedUser]);
    // console.log(users)
    const dispatch = useDispatch();
    const getProducts = () => {
        dispatch(fetchUsers())
    }
    useEffect(() => {

        getProducts()
    }, [dispatch]);

    const sortbyName = () => {
        dispatch(sortNameAZ());
        toast.success("Names Sorted A to Z!")
    }
    const sortbyNameZA = () => {
        dispatch(sortNamebyZA())
        toast.success("Names Sorted Z to A!")
    }
    const showAdmins = () => {
        dispatch(showAllAdmin())
        toast.success("Showing Admin")
    }
    const deleteuser = (id) => {
        dispatch(deleteUser(id));
        toast.error("user deleted succesfilly!!")

    }

    const makeadmin = (id) => {
        dispatch(makeAdmin(id));

    }

  

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value); 
        dispatch(searchUser(value));
      };

    return (
        <div>

            <header>
                <h1 className="text-center">Users</h1>
                <Link to='/adminpanel' style={{ textAlign: "center", display: "block" }}>Products---&gt;</Link>
            </header>
            <div class="container">
                <button className='add-btn' onClick={() => { sortbyName() }} style={{ margin: "10px 0px", width: "auto" }}>Sort by FirstName A-Z</button>
                <button className='add-btn' onClick={() => { sortbyNameZA() }} style={{ margin: "10px 0px", width: "auto" }}>Sort by FirstName A-Z</button>
                <button className='add-btn' onClick={() => { showAdmins() }} style={{ margin: "10px 0px", width: "auto" }}>Show Admins </button>
                <input
                    type="text"
                    className="searchbtn"
                    value={searchTerm}
                    onChange={handleSearchChange}  
                    placeholder="Search product..."
                />



                <table style={{ maxWidth: "1000px" }}>

                    <thead >
                        <tr className='userstable'>
                            <th scope="col">ID</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Data</th>
                            <th scope="col">Date With Time</th>
                            <th scope="col">Role</th>
                            <th scope="col">Actions</th>



                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user) => (
                                <tr key={user.id} className='userstable'>
                                    <th scope="row">{user.id}</th>
                                    <td data-title="Released">{user.firstName}</td>
                                    <td data-title="Studio">{user.lastName}</td>
                                    <td data-title="Worldwide Gross" data-type="currency">{user.username}</td>
                                    <td data-title="Domestic Gross" data-type="currency">{user.email}</td>
                                    <td data-title="International Gross" data-type="currency">{user.gender}</td>
                                    <td data-title="Budget" data-type="currency">{new Date(user.data).toLocaleDateString()}

                                    </td>
                                    <td data-title="Budget" data-type="currency">
                                        {new Date(user.data).toLocaleString()}
                                    </td>
                                    <td data-title="Budget" data-type="currency">


                                        {
                                            user.isAdmin ? ("admin") : ("user")
                                        }

                                    </td>
                                    <td>
                                        <div className="action" style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center" }}>
                                            <Button style={{ color: "#C30E59", minWidth: "20px" }}
                                                onClick={() => { deleteuser(user?.id) }}

                                                startIcon={<DeleteIcon />}
                                            >Delete
                                            </Button>

                                            <Button style={{ color: "#2E5077", minWidth: "20px" }} startIcon={<EditIcon />} onClick={() => handleOpenEdit(user)} >Edit</Button>


                                            <Button onClick={() => { handleOpenInfo(user) }} style={{ color: '#47663B' }} startIcon={<InfoIcon />} >wiew</Button>


                                            {/* <Button onClick={() => { makeadmin(user.id) }}>
                                                {user.isAdmin ? ('Remove Admin') : ('Make Admin')}
                                            </Button> */}

                                        </div>
                                    </td>

                                </tr>
                            ))
                        }

                        <Modal
                            open={openInfo}
                            onClose={handleCloseInfo}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                {selectedUser && (
                                    <>
                                        <Typography variant="h6" component="h2">
                                            {selectedUser.firstName} {selectedUser.lastName}
                                        </Typography>
                                        <Typography sx={{ mt: 2 }}>Email: {selectedUser.email}</Typography>
                                        <Typography sx={{ mt: 2 }}>Username: {selectedUser.username}</Typography>
                                        <Typography sx={{ mt: 2 }}>Gender: {selectedUser.gender}</Typography>
                                        <Typography sx={{ mt: 2 }}>Role: {selectedUser.isAdmin ? 'Admin' : 'User'}


                                        </Typography>
                                        <Typography sx={{ mt: 2 }}>
                                            Joined: {new Date(selectedUser.data).toLocaleString()}
                                        </Typography>
                                        <Button onClick={handleCloseInfo} sx={{ mt: 2 }}>
                                            Close
                                        </Button>
                                    </>
                                )}
                            </Box>
                        </Modal>





                        <Modal open={openEdit} onClose={handleCloseEdit}>
                            <Box sx={style}>
                                <Typography variant="h6">Edit User</Typography>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Button onClick={handleEdit}>Edit</Button>
                            </Box>
                        </Modal>

                    </tbody>

                    <ToastContainer />
                </table>
            </div>

        </div>
    )
}

export default Users
