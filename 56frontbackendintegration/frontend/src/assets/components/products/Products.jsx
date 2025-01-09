import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/feautures/ProductSlice";
import './product.scss'

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="products-container">
      {products?.map((product) => (
        <div key={product._id} className="product-card">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
