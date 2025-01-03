import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, sortNameAZ, sortNamebyZA } from '../redux/features/userSlice'
import { Box, Button, Modal, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import { toast, ToastContainer } from 'react-toastify';
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
    const [openInfo, setOpenInfo] = React.useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const handleCloseInfo = () => setOpenInfo(false);
    const users = useSelector((state) => state.user.users)
    const handleOpenInfo = (user) => { setOpenInfo(true); setSelectedUser(user) }

    console.log(users)
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

    return (
        <div>
           
            <header>
                <h1 className="text-center">Users</h1>
            </header>
            <div class="container">
                <button className='add-btn' onClick={() => { sortbyName() }} style={{ margin: "10px 0px", width: "auto" }}>Sort by FirstName A-Z</button>
                <button className='add-btn' onClick={() => { sortbyNameZA() }} style={{ margin: "10px 0px", width: "auto" }}>Sort by FirstName A-Z</button>

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
                            <th scope="col">Admin/User</th>
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

                                                startIcon={<DeleteIcon />}
                                            >Delete
                                            </Button>

                                            <Button style={{ color: "#2E5077", minWidth: "20px" }} startIcon={<EditIcon />} >Edit</Button>





                                            <Button onClick={()=>{handleOpenInfo(user)}} style={{ color: '#47663B' }} startIcon={<InfoIcon />} >wiew</Button>




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
                            <Typography sx={{ mt: 2 }}>Role: {selectedUser.isAdmin ? 'Admin' : 'User'}</Typography>
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

                    </tbody>

                    <ToastContainer />
                </table>
            </div>

        </div>
    )
}

export default Users
