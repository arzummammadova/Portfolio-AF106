import React, { useEffect } from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/ProductSlice';
import { addToBasket } from '../redux/basketSlice';
import { ToastContainer } from 'react-toastify';
import { minusBtn,plusBtn } from '../redux/basketSlice';

const Details = () => {
  const { id } = useParams();

  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch()
  const findProduct = products.find((product) => product.id === id)

  useEffect(() => {
    // fetchUser();
    dispatch(getProducts());
  }, [dispatch]);
  const AddToBasket=(product,e)=>{
    e.stopPropagation();
    dispatch( addToBasket(product));
    toast.success('Added to basket sucsessfully');
  }
  const incrementProductCount = (product) => {
    dispatch(plusBtn({ id: product.id }))
    // dispatch(incrementProductCount({ id: product.id, count: 1}))
  }

  const decremenetProductCount = (product) => {
    dispatch(minusBtn({ id: product.id }))
   
  }
  return (
    <div >
      <div className="product-details">
        <div className="product-details__image">
          <img src={findProduct?.images} alt="Product Image" className="product-details__image-img" />
        </div>

        <div className="product-details__info">
          <h1 className="product-details__title">{findProduct?.title}</h1>
          <p className="product-details__description">
            {findProduct?.description}
          </p>

          <div className="product-details__rating">
            <span className="product-details__rating-stars">★★★★☆</span>
            <span className="product-details__rating-count">{findProduct?.rating}</span>
          </div>

          <p className="product-details__price">Price: <span className="product-details__price-amount">{findProduct?.price} AZN</span></p>

          <button className="product-details__add-to-basket" onClick={(e)=>AddToBasket(findProduct,e)}>Add to Basket</button>
          <div className="count-area" style={{marginTop:"40px"}} >
          <button className="minus-btn" disabled={findProduct?.count === 0} onClick={() => { decremenetProductCount(findProduct) }}  >-</button>
            <p style={{color:"black"}}>{findProduct?.count}</p>
            <button className="plus-btn" onClick={() => { incrementProductCount(findProduct) }}>+</button>
          </div>

          <div className="product-details__extra-info">
            <h3 className="product-details__extra-info-title">Product Details:</h3>
            <ul className="product-details__extra-info-list">
              <li className="product-details__extra-info-item"><strong>Category:</strong>{findProduct?.category}</li>
              <li className="product-details__extra-info-item"><strong>Brand:</strong> {findProduct?.brand}</li>
              {/* <li className="product-details__extra-info-item"><strong>Color:</strong> Black</li>
          <li className="product-details__extra-info-item"><strong>Warranty:</strong> 1 Year</li> */}
            </ul>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </div>
  )
}

export default Details
