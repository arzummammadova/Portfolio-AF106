import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/features/productSlicer';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <img style={{ width: "100px" }} src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default Products;
