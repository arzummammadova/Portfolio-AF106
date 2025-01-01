import React from 'react';
import bestseller from '../assets/images/bestseller.png';
import heartIcon from '../assets/icons/hearticon.svg';
import detailsImage from '../assets/images/details.png';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/features/productSlicer';
import { useEffect } from 'react';
import Tabs from './tabs/Tabs';
import Productsslide from './Productsslide';

const Details = () => {
  const {id}=useParams();
  // const dispatch=useDispatch();
  

  const filteredProducts = useSelector((state) => state.product.filteredProducts);
  const product = filteredProducts.find((product) => product.id === id);

  // const product=filteredProducts.find((product)=>product.id===id)
  // console.log(product)
  // useEffect(() => {
    
  //  dispatch(setProducts());
  // }, [dispatch]);

  return (
    <div>
      <section id="details">
        <div className="container">
          <div className="road" style={{ marginLeft: '5rem' }}>
            <a href="index.html">Home</a>
            <span> &gt; </span>
            <a href="details.html" className="active-road">Details</a>
          </div>

          <div className="product-info">
            <div className="left-side">
              <div className="change-image-slider">
                <div className="up-arrow">
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8L8 2L14 8" stroke="#212121" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="square" />
                  </svg>
                </div>
                <div className="change-image">
                  <img src={product?.image} alt="Bestseller" className="changeimg active-border" />
                  <img src={product?.image} alt="Product details" className="changeimg" />
                  <img src={product?.image} alt="Product details" className="changeimg" />
                  <img src={product?.image} alt="Product details" className="changeimg" />
                </div>
                <div className="arrow-down">
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L8 8L14 2" stroke="black" strokeWidth="2" strokeLinecap="square" />
                  </svg>
                </div>
              </div>

              <div className="main-img">
                <img className="heart" src={heartIcon} alt="Heart Icon" />
                <p className="hero__left__desc price-btn">30% off</p>
                <img className="main" src={product?.image} alt="Main product" />
              </div>
            </div>

            <div className="right-side">
              <div className="product-titlee" >
               {product?.title}
              </div>
              <div className="product-price">
                ${product?.price}
              </div>
              <button className='add-to-cart-btn '>Add to cart</button>
            </div>
          </div>

          <div className="product-container"></div>
        </div>
      </section>
      <Tabs/>
      <div id="featuredproducts">
        <div className="container">
          <div className="featuredproducts">
            <div className="featuredproducts_title">
              <h2>Same Category</h2>
              <div className="featuredproducts_title_right">
                <a href="shoulderbag.html">View all products</a>
             
              </div>
            </div>
            <div className="featuredproducts_cards">
             
              <Productsslide  selectedCategory={product?.category} /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
