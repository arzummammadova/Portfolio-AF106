import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './products.css';
import toast, { Toaster } from 'react-hot-toast';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Productt from '../product/Productt';

const Products = ({ data, setData, loading }) => {
    
    const [show, setShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [newProduct, setNewProduct] = useState({
        title: '',
        price: '',
        image: '',
        id: ''
    });

    

    const reset = () => {
        setData([]);
        toast.success('Successfully reseted!');
    };

    const deleteProduct = (id) => {
        const updatedData = data.filter(product => product.id !== id);
        setData(updatedData);
        toast.success('Successfully deleted!');
    };

    const onChangeValue = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const createProduct = () => {
        if (newProduct.price === "" || newProduct.image === "" || newProduct.title === "") {
            toast.error("Xanalar dolu dolmalıdır.");
        } else {
            const newProductWithId = {
                ...newProduct,
                id: data.length ? Math.max(...data.map(product => product.id)) + 1 : 1
            };
            setData([...data, newProductWithId]);
            toast.success("Mehsul elave olundu");
            setNewProduct({ title: '', price: '', image: '', id: '' });
            handleClose();
        }
    };

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        setNewProduct({ title: '', price: '', image: '', id: '' });
    };

    const handleShowEdit = (product) => {
        setNewProduct(product);
        setEditShow(true);
    };

    const handleCloseEdit = () => {
        setEditShow(false);
        setNewProduct({ title: '', price: '', image: '', id: '' });
    };

    const editProduct = () => {
        if (!newProduct.price || !newProduct.title || !newProduct.image) {
            toast.error("Bos olmamalıdır!");
        } else {
            const updatedData = data.map(product =>
                product.id === newProduct.id ? newProduct : product
            );
            setData(updatedData);
            toast.success("Mehsul uğurla yeniləndi!");
            handleCloseEdit();
        }
    };

    return (
        <div className="container-fluid">
            {loading ? (
                <Spinner animation="border" variant="danger" className="spinner" />
            ) : (
                <div>
                
                    <button className='create' onClick={handleShow}>Create Product</button>
                    <button className='reset' onClick={reset}>Reset</button>
                    <div className="products">
                        {data.map((product) => (
                            <Productt
                                product={product}
                                deleteProduct={deleteProduct}
                                handleShowEdit={handleShowEdit}
                                key={product.id}
                            />
                        ))}
                    </div>


                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Product Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        onChange={onChangeValue}
                                        value={newProduct.title}
                                    />
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="price"
                                        onChange={onChangeValue}
                                        value={newProduct.price}
                                    />
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="image"
                                        onChange={onChangeValue}
                                        value={newProduct.image}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={createProduct}>Add Product</Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={editShow} onHide={handleCloseEdit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Product Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        onChange={onChangeValue}
                                        value={newProduct.title}
                                    />
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="price"
                                        onChange={onChangeValue}
                                        value={newProduct.price}
                                    />
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="image"
                                        onChange={onChangeValue}
                                        value={newProduct.image}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseEdit}>Close</Button>
                            <Button variant="warning" onClick={editProduct}>Save Changes</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )}
        </div>
    );
};

export default Products;
