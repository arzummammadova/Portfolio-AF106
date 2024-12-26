import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './wishlist.css';
import { deleteall, getWistListProducts, removefromWishlist } from '../redux/wishlistSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.value);

  useEffect(() => {
    dispatch(getWistListProducts());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removefromWishlist(id));
    toast.success('Item removed from wishlist'); 
  };

  const deleteAll = () => {
    dispatch(deleteall());
    toast.success('All items deleted from wishlist'); 
  };

  return (
    <div className='wishcontainer' style={{ color: 'white' }}>
      <header className="d-flex">
        <h1>Wishlist</h1>
        <a href="index.html" style={{ color: 'white' }}>
          <i className="fa-regular fa-heart" style={{ fontSize: '25px' }}></i>
        </a>
      </header>

      <div className="wishlist-container">
        <div className="container">
          <div className="row">
            {wishlistItems.map((item) => (
              <div className="wishlist-product" key={item.id}>
                <div className="wishlist-product-left">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="wishlist-product-right">
                  <div className="product-info">
                    <p className="wishlistname">{item.title}</p>
                    <p className="rating">
                      {item.rating} <span className="star">★</span>
                    </p>
                  </div>
                  <div className="wishlistdesc">
                    <div className="countbtn">
                      <button>-</button>
                      <button>0</button>
                      <button>+</button>
                    </div>
                    <div className="price">{item.price}$</div>
                  </div>
                </div>
                <div className="wishlist-product-end">
                  <button className="buttonremove" onClick={() => handleRemove(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="deleteall">
              <div
                className="buttonremove"
                onClick={deleteAll}
                style={{ marginLeft: '30px', margin: '60px auto', width: '200px', cursor: 'pointer' }}
              >
                DELETE ALL
              </div>
            </div>
            <Link to="/" className="back" style={{ marginLeft: '30px' }}>
              Go back
            </Link>
          </div>
        </div>
      </div>

  
      <ToastContainer />
    </div>
  );
};

export default Wishlist;
