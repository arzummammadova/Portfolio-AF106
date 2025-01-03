import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../redux/features/adminSlice';
import { Button, Input, InputAdornment, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { addnewProduct, deleteproduct, editProduct, sortProductByZA } from '../redux/features/productSlicer';
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
  padding: '50px',
  borderRadius: '8px',
  width: '40%'
});

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

const Adminpanel = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("")
  const [rating, setRating] = useState("")
  const [count, setCount] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([]);

  const resetFields = () => {
    setTitle("");
    setDescription("");
    setCategory("");
    setPrice("");
    setImage("");
    setRating("");
    setCount("");
  };

  const handleOpen = (product) => {
    resetFields()
    setSelectedProduct(product);
    // console.log(product)
    setOpen(true);
  };
  const handleEditSave = () => {
    if (!title || !description || !category || !price || !image || !rating || !count) {
      toast.error("Please fill in all fields");
      return;
    }

    const updatedProduct = {
      ...selectedProduct,
      title,
      description,
      category,
      price: parseFloat(price),
      image,
      rating: {
        rate: parseFloat(rating),
        count: parseInt(count, 10),
      },
    };

    dispatch(editProduct(updatedProduct));
    setOpenEdit(false);
    toast.success("Product updated successfully!");
  };


  const handleOpenEdit = (product) => {
    setSelectedProduct(product);
    setTitle(product.title);
    setDescription(product.description);
    setCategory(product.category);
    setPrice(product.price);
    setImage(product.image);
    setRating(product.rating.rate);
    setCount(product.rating.count);
    setOpenEdit(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseEdit = () => setOpenEdit(false);

  const createProduct = () => {
    if (!title || !description || !category || !price || !image || !rating || !count) {
      toast.error("Please fill out all fields!");
      return;
    }
  
    const newProduct = {
      title,
      description,
      category,
      price: parseFloat(price),
      rating: { rate: parseFloat(rating), count: parseInt(count, 10) },
      image,
    };
  
    dispatch(addnewProduct(newProduct));
    toast.success("Added new product!");
    resetFields(); 
    setOpen(false); 
  };
  

  const updateProduct = () => {
    if (!title || !description || !category || !price || !rating || !image || !count) {
      toast("Please fill out all fields!");
    } else {
      const updatedProduct = {
        ...selectedProduct,
        title,
        description,
        category,
        price: parseFloat(price),
        rating: { rate: rating, count: count },
        image,
      };
      dispatch(editProduct(updatedProduct));
      toast.success("Product updated!");
      handleCloseEdit();
    }
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, products]);

  function deleteProduct(id) {
    dispatch(deleteproduct(id));
    toast.success("Mehsul silindi");
  }



  const sortProductAZ = () => {
    const sorted = [...products].sort((a, b) => a.title.localeCompare(b.title));
    setFilteredProducts(sorted);
    toast.success("Products sorted A-Z!");
  };

  const sortProductZA = () => {
    const sorted = [...products].sort((a, b) => b.title.localeCompare(a.title))
    setFilteredProducts(sorted)
    // dispatch(sortProductByZA());
    toast.success("Product sorted Z-a")
  }
  const lowToHigh=()=>{
     const sorted=[...products].sort((a,b)=>a.price-b.price)
     setFilteredProducts(sorted);
     toast.success("Sorted by Low to High")
  }
  const highToLow=()=>{
    const sorted=[...products].sort((a,b)=>b.price-a.price)
    setFilteredProducts(sorted);
    toast.success("Sorted by Low to High")
 }
 const ratingLessPopular=()=>{
  const sorted=[...products].sort((a,b)=>a.rating.rate-b.rating.rate)
  setFilteredProducts(sorted)
  toast.success("Sorted by Rating")
}

const ratingPopular=()=>{
  const sorted=[...products].sort((a,b)=>b.rating.rate-a.rating.rate)
  setFilteredProducts(sorted)
  toast.success("Sorted by Rating Popular")
}
const countLowToHigh=()=>{
  const sorted=[...products].sort((a,b)=>a.rating.count-b.rating.count)
  setFilteredProducts(sorted)
  toast.success("Sorted by Count (l-h)")
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

          <button className="add-btn" onClick={() => handleOpen()}>Create</button>
          <button className="add-btn sortbtn" onClick={() => sortProductAZ()} >Sort by AZ</button>
          <button className="add-btn sortbtn" onClick={() => sortProductZA()} >Sort by ZA</button>
          <button className="add-btn sortbtn" onClick={() => lowToHigh()} >Sort by Low to High</button>
          <button className="add-btn sortbtn" onClick={() => highToLow()} >Sort by High to Low</button>
          <button className="add-btn sortbtn" onClick={() => ratingLessPopular()} >Rating Less Popular</button>
          <button className="add-btn sortbtn" onClick={() => ratingPopular()} >Rating Most Popular</button>
          <button className="add-btn sortbtn" onClick={() => countLowToHigh()} >Sort by Count (low -high)</button>
          <button className="add-btn sortcount" onClick={() => countLowToHigh()} >Sort by Count (low -high)</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >

            <Box sx={style} style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <TextField
                label="Title"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <TextField
                label="Description"
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                label="Category"
                fullWidth
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <TextField
                label="Image"
                fullWidth
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <TextField
                label="rating"
                fullWidth
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
              <TextField
                label="add count"
                fullWidth
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
              <Input
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                placeholder="Price"
              />

              <Button
                style={{ backgroundColor: "green", color: "white" }}
                onClick={() =>   createProduct()}
              
              >
                Save
              </Button>

            </Box>
          </Modal>
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
                  (filteredProducts.length > 0 ? filteredProducts : products).map((product) => (

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

                          <Button style={{ color: "#2E5077", minWidth: "20px" }} startIcon={<EditIcon />} onClick={() => handleOpenEdit(product)} />





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
        selectedProduct && (<Modal open={open} onClose={handleClose}>
          <ModalBox >
            <h2 style={{ color: "red" }}>Product Name: {selectedProduct.title} h</h2>
            <img style={{ width: "100px", height: "100px" }} src={selectedProduct.image} alt="" />
            <Typography variant="h6" component="h2">Product Price :${selectedProduct.price}</Typography>
            <Typography style={{ fontSize: "15px" }} sx={{ mt: 2 }}>Image link:{selectedProduct.image}</Typography>
            <Typography style={{ fontSize: "15px" }} sx={{ mt: 2 }}>Description:{selectedProduct.description}</Typography>
            <Typography style={{ fontSize: "15px" }} sx={{ mt: 2 }}>Count:{selectedProduct?.rating?.count}</Typography>
            <Typography style={{ fontSize: "15px" }} sx={{ mt: 2 }}>Rating:{selectedProduct?.rating?.rate}<StarIcon style={{ color: "yellow" }} /></Typography>
          </ModalBox>
        </Modal>)

      }
      <Modal open={openEdit} onClose={handleCloseEdit} aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">


        <Box sx={style} style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            label="Description"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            label="Category"
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <TextField
            label="Image"
            fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <TextField
            label="rating"
            fullWidth
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <TextField
            label="add count"
            fullWidth
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <Input
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            placeholder="Price"
          />

          <Button
            style={{ backgroundColor: "green", color: "white" }}
            onClick={() => handleEditSave()}
          >
            edit
          </Button>

        </Box>

      </Modal>
      <ToastContainer />

    </div>
  );
};

export default Adminpanel;
