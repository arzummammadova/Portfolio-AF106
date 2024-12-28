import React, { useEffect } from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/ProductSlice';
import { addToBasket, minusBtn, plusBtn } from '../redux/basketSlice';
import { ToastContainer, toast } from 'react-toastify';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { value: basket } = useSelector((state) => state.basket);

  const product = products.find((product) => product.id ==id);
  const basketProduct = basket.find((item) => item.id ==id);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const AddToBasket = (product, e) => {
    e.stopPropagation();
    dispatch(addToBasket(product));
    toast.success('Added to basket successfully');
  }

  const incrementProductCount = (product) => {
    dispatch(plusBtn({ id: product.id }));
  }

  const decrementProductCount = (product) => {
    dispatch(minusBtn({ id: product.id }));
  }

  return (
    <div>
      <div className="product-details">
        <div className="product-details__image">
          <img src={product?.thumbnail} alt={product?.title} className="product-details__image-img" />
        </div>

        <div className="product-details__info">
          <h1 className="product-details__title">{product?.title}</h1>
          <p className="product-details__description">{product?.description}</p>

          <div className="product-details__rating">
            <span className="product-details__rating-stars">★★★★☆</span>
            <span className="product-details__rating-count">({product?.rating})</span>
          </div>

          <p className="product-details__price">Price: <span className="product-details__price-amount">{product?.price} AZN</span></p>

          <button className="product-details__add-to-basket" onClick={(e) => AddToBasket(product, e)}>Add to Basket</button>

          <div className="count-area" style={{ marginTop: "40px" }}>
            <button className="minus-btn" disabled={basketProduct?.count === 0} onClick={() => decrementProductCount(product)}>-</button>
            <p style={{ color: "black" }}>{basketProduct?.count || 0}</p>
            <button className="plus-btn" onClick={() => incrementProductCount(product)}>+</button>
          </div>

          <div className="product-details__extra-info">
            <h3 className="product-details__extra-info-title">Product Details:</h3>
            <ul className="product-details__extra-info-list">
              <li className="product-details__extra-info-item"><strong>Category:</strong> {product?.category}</li>
              <li className="product-details__extra-info-item"><strong>Brand:</strong> {product?.brand}</li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Details;
