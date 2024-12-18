import React from 'react';

const Productt = ({ product, deleteProduct, handleShowEdit }) => {
    return (
        <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <div className="info">
                <p>{product.title.slice(0, 20) + "..."}</p>
                <p className="price">Price: {product.price}</p>
                <button onClick={() => deleteProduct(product.id)} className="delete">Delete</button>
                <button onClick={() => handleShowEdit(product)} className="edit">Edit</button>
            </div>
        </div>
    );
};

export default Productt;
