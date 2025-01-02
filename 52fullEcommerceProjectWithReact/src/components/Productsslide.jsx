import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/features/productSlicer';
import { addAndRemoveToWishlist } from '../redux/features/wishlistSlicer'; // Import the action
import starIcon from '../assets/icons/star.svg';
import hearticon from '../assets/icons/hearticon.svg';
import hearticonfill from '../assets/icons/hearticonfill.svg';
import { useNavigate } from 'react-router-dom';
import { addToBasket } from '../redux/features/basketSlice';

const Productsslide = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.product.products);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const basket = useSelector((state) => state.basket.basket)

  const [heart, setHeart] = useState({});

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  const hearttoggle = (product) => {
    dispatch(addAndRemoveToWishlist(product));
    setHeart((prev) => ({
      ...prev,
      [product.id]: !prev[product.id],
    }));
  };

  const addtobasket = (product) => {
    dispatch(addToBasket(product));
    alert("added")
  }

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      {filteredProducts.slice(0, 3).map((product) => (
        <div
          key={product.id}
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/details/${product.id}`);
          }}
          className="featuredproducts_cards_card"
          style={{ width: '100%' }}
        >
          <div className="featuredproducts_cards_card_top">
            <figure>
              <img src={product.image} alt="Featured Product" />
            </figure>
            <div className="starts" style={{ display: 'flex' }}>
              {[...Array(5)].map((_, index) => (
                <img key={index} className="star" src={starIcon} alt="Star" />
              ))}
            </div>
          </div>
          <p>{product.title}</p>
          <span className="price">${product.price}</span>
          <span className="prevprice">From $340.00</span>
          <div className="btn-card" onClick={(e) => {
            e.stopPropagation(); 
            addtobasket(product); 
          }}>
            Add to cart
          </div>

          <button className="btn-lt btn-green">NEW</button>
          <div
            className="heart"
            onClick={(e) => {
              e.stopPropagation();
              hearttoggle(product);
            }}
          >
            <img
              src={wishlist.some((item) => item.id === product.id) ? hearticonfill : hearticon}
              alt="Heart Icon"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Productsslide;
