import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts, deleteProducts, getProducts, updateProducts } from '../redux/feautures/ProductSlice'
import './Adminpanel.scss'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
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
const AdminPanel = () => { const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({ name: '', description: '', price: '', image: '' });
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch,getProducts()]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setCurrentProduct({ name: '', description: '', price: '', image: '' });
  };

  const handleDelete = (id) => {
    dispatch(deleteProducts(id));
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setCurrentProduct(product);
    handleOpen();
  };

  const handleSubmit = () => {
    if (isEditing) {
      dispatch(updateProducts(currentProduct));
    } else {
      dispatch(addProducts(currentProduct)); 
    }
    handleClose();
  };

  return (
    <div className="container">
      <button onClick={handleOpen}>Create</button>

      <div className="table">
        <div className="table-header">
          <div className="header__item"><a id="name" className="filter__link" href="#">Name</a></div>
          <div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">Description</a></div>
          <div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#">Price</a></div>
          <div className="header__item"><a id="losses" className="filter__link filter__link--number" href="#">Image</a></div>
          <div className="header__item"><a id="total" className="filter__link filter__link--number" href="#">Action</a></div>
        </div>
        <div className="table-content">
          {products?.map((product) => (
            <div className="table-row" key={product._id}>
              <div className="table-data">{product.name}</div>
              <div className="table-data">{product.description}</div>
              <div className="table-data">{product.price}</div>
              <div className="table-data"><img src={product.image} alt="" /></div>
              <div className="table-data">
                <button onClick={() => handleDelete(product._id)}>Delete</button>
                <button onClick={() => handleEdit(product)}>Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {isEditing ? 'Edit Product' : 'Create Product'}
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <TextField
              label="Name"
              value={currentProduct.name}
              onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              value={currentProduct.description}
              onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Price"
              type="number"
              value={currentProduct.price}
              onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Image URL"
              value={currentProduct.image}
              onChange={(e) => setCurrentProduct({ ...currentProduct, image: e.target.value })}
              fullWidth
              margin="normal"
            />
          </div>
          <Button variant="contained" onClick={handleSubmit} style={{ marginTop: '1rem' }}>
            {isEditing ? 'Update' : 'Create'}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AdminPanel;