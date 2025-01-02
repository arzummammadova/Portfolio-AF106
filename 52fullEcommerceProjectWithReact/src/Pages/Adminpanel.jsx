import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../redux/features/adminSlice';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { deleteproduct } from '../redux/features/productSlicer';
import { toast, ToastContainer } from 'react-toastify';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { styled } from '@mui/material/styles';

const ModalBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  padding: '30px',
  borderRadius: '8px',
  width:'40%'
});


const Adminpanel = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  function deleteProduct(id) {
    dispatch(deleteproduct(id));
    toast.success("Mehsul silindi");
  }

  return (
    <div className="admin-container">
      <main className="content">
        <header>
          <h1 className="text-center">List of Products</h1>
          <div className="pages" style={{ textAlign: "center" }}>
            <Link to='/adminpanel'><p style={{ textAlign: "center", fontSize: "16px" }}>Product</p></Link>
            <Button><p style={{ textAlign: "center", fontSize: "16px" }}>User</p></Button>
          </div>

          <button className="add-btn">Create</button>
        </header>

        <section>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Count</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td><img style={{ width: "100px", height: "100px" }} src={product.image} alt="" /></td>
                      <td>{product.title}</td>
                      <td>{product.category}</td>
                      <td>$ {product.price}</td>
                      <td>
                        <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center" }}>
                          {product.rating.rate}<StarIcon style={{ color: "yellow" }} />
                        </div>
                      </td>
                      <td>{product.rating.count}</td>
                      <td>
                        <div className="action" style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center" }}>
                          <Button style={{ color: "#C30E59", minWidth: "20px" }}
                            onClick={() => deleteProduct(product.id)}
                            startIcon={<DeleteIcon />}
                          >
                          </Button>

                          <Button style={{ color: "#2E5077", minWidth: "20px" }} startIcon={<EditIcon />} />

                          <Button onClick={() => handleOpen(product)} style={{ color: '#47663B' }} startIcon={<InfoIcon />} />



                        </div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </section>
      </main>
      {
        selectedProduct &&( <Modal open={open} onClose={handleClose}>
          <ModalBox >
            <h2 style={{color:"red"}}>Product Name: { selectedProduct.title} h</h2>
            <img style={{width:"100px",height:"100px"}} src={selectedProduct.image} alt="" />
            <Typography variant="h6" component="h2">Product Price :${selectedProduct.price}</Typography>
            <Typography style={{fontSize:"15px"}} sx={{ mt: 2 }}>Image link:{ selectedProduct.image}</Typography>
            <Typography  style={{fontSize:"15px"}} sx={{ mt: 2 }}>Description:{ selectedProduct.description}</Typography>
            <Typography  style={{fontSize:"15px"}} sx={{ mt: 2 }}>Count:{ selectedProduct.rating.count}</Typography>
            <Typography  style={{fontSize:"15px"}} sx={{ mt: 2 }}>Rating:{ selectedProduct.rating.rate}<StarIcon style={{color:"yellow"}}/></Typography>
          </ModalBox>
        </Modal>)
     
      }
  <ToastContainer />

    </div>
  );
};

export default Adminpanel;
