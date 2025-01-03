import React from 'react';
import transportIcon from '../assets/icons/transport 1.svg';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, updateQuantity } from '../redux/features/basketSlice'; 

const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.value); 

  const addToFavorites = (product) => {
    console.log('Added to favorites:', product);
  };

  const handleRemove = (productId) => {
    dispatch(removeFromBasket({ id: productId }));
  };

  const handleUpdateQuantity = (productId, amount) => {
    dispatch(updateQuantity({ id: productId, amount }));
  };

  const handleRemoveAll = () => {
    dispatch(removeAllBasket());
  };

  return (
    <div>
      <section id="basket">
        <div className="container">
          <div className="road">
            <a href="index.html">Home</a>
            <span> &gt; </span>
            <a href="basket.html" className="active-road">Basket</a>
          </div>

          <h3>Shopping bag</h3>
          <div className="bb">
            <div className="basket-buy">
              {basketItems.length === 0 ? (
                <p>Your basket is empty.</p>
              ) : (
                basketItems.map((product) => (
                  <div key={product.id} className="basket-buy-left">
                    <div className="image">
                      <img src={product.image} alt={product.title || 'No Title'} />
                    </div>

                    <div className="desc">
                      <div className="desc-header">
                        <h4>{product.title || 'No Title'}</h4>
                        <p>USD ${product.price || 0}</p>
                      </div>

                      <div className="quantity">
                        <p>Quantity: {product.count || 1}</p>
                        <button className="decrement" onClick={() => handleUpdateQuantity(product.id, -1)}>-</button>
                        <button className="increment" onClick={() => handleUpdateQuantity(product.id, 1)}>+</button>
                      </div>

                      <div className="movement">
                        {/* <div className="addfavorite" onClick={() => addToFavorites(product)}>
                          <i className="bi bi-heart"></i> Favorite
                        </div> */}
                        <div className="remove" onClick={() => handleRemove(product.id)}>
                          <i className="bi bi-trash"></i> Remove
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="basket-buy-right">
              <div className="card">
                <div className="your-subtotal">
                  <h4>Total</h4>
                  <p id="total-price">${basketItems.reduce((total, product) => total + product.price * product.count, 0)}</p>
                </div>
                <button className="make">Make Payment</button>
              </div>
            </div>
          </div>
          <button className="deleteall" onClick={handleRemoveAll}>Delete All Items</button>
        </div>
      </section>

      <div className="container">
        <section className="support">
          {Array(4).fill().map((_, index) => (
            <div className="support-cards" key={index}>
              <div className="suppord-card">
                <div className="icon">
                  <img src={transportIcon} alt="Delivery Icon" />
                </div>
                <div className="suppord-text">
                  <h3>Guaranteed Delivery</h3>
                  <p>
                    Consectetur adipiscing sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Basket;
