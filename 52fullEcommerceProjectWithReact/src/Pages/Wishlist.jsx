import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import star from '../assets/icons/star.svg';
import { deleteproductWishlist, removeallWishlist } from '../redux/features/wishlistSlicer';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const handleRemove = (product) => {
    dispatch( removeallWishlist(product)); 
  };
  const deletefromWish=(product)=>{
    dispatch(deleteproductWishlist(product))
  }

  return (
    <div>
      <div className="container">
        <div className="road">
          <a href="index.html">Home</a>
          <span>&gt;</span>
          <a href="wishlist.html" className="active-road">Wish list</a>
        </div>
      </div>

      <section id="featuredproducts">
        <div className="container">
          <div className="featuredproducts">
            <div className="featuredproducts_container favori">
              <div className="featuredproducts_cards" id="cardContainer">
                {wishlist.length > 0 ? (
                  wishlist.map((product) => (
                    <div key={product.id} className="featuredproducts_cards_card" style={{ width: '100%' }}>
                      <div className="featuredproducts_cards_card_top">
                        <figure>
                          <img src={product.image} alt={product.title} />
                        </figure>
                        <div className="starts" style={{ display: 'flex' }}>
                          {[...Array(5)].map((_, index) => (
                            <img key={index} className="star" src={star} alt="Star" />
                          ))}
                        </div>
                      </div>
                      <p>{product.title}</p>
                      <span className="price">${product.price}</span>
                      <span className="prevprice">From ${product.prevPrice}</span>

                      <div className="btn-card">
                        Add to cart
                      </div>

                      <div className="heart close" onClick={() => deletefromWish(product)}>
                        X
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Your wishlist is empty.</p>
                )}
              </div>
            </div>
          </div>

          <button className="clear-all-button" onClick={() => dispatch( removeallWishlist())}>
            Clear all
          </button>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
