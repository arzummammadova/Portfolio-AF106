import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import starIcon from '../assets/icons/star.svg';
import heartIcon from '../assets/icons/hearticon.svg';
import heartIconFill from '../assets/icons/hearticonfill.svg';
import { Link, useNavigate } from 'react-router-dom';
import { addAndRemoveToWishlist } from '../redux/features/wishlistSlicer';
import { addToBasket } from '../redux/features/basketSlice';
import { setProducts } from '../redux/features/productSlicer';
import { toast, ToastContainer } from 'react-toastify';

const AllProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filteredProducts = useSelector((state) => state.product.filteredProducts);
  const products = useSelector((state) => state.product.products);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

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

    const existingProduct = wishlist.find((item) => item.id === product.id);

    if (!existingProduct) {
      toast.success(` added to wishlist!`);
    } else {
      toast.info(`removed from wishlist!`);
    }
  };

  const handleHeartClick = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    hearttoggle(product);
  };

  const addtobasket = (product) => {
    dispatch(addToBasket(product));
    toast.success("added to the basket")
  }

  return (
    <div>
      <div className="featuredproducts_cards shoulderproducts">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/details/${product.id}`);
            }}
            className="featuredproducts_cards_card"
          >
            <div className="featuredproducts_cards_card_top">
              <figure>
                <img src={product.image} alt="Shoulder Bag" />
              </figure>
              <div className="stars">
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
              onClick={(e) => handleHeartClick(e, product)}
            >
              <img
                src={wishlist.some((item) => item.id === product.id) ? heartIconFill : heartIcon}
                alt="Heart Icon"
              />
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AllProducts;
