import React from 'react'
import { useSelector } from 'react-redux'
import './basket.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { minusBtn, plusBtn, removeProduct, resetAll } from '../redux/basketSlice';
import { ToastContainer, toast } from 'react-toastify';


const Basket = () => {
  const dispatch = useDispatch()

  const basket = useSelector((state) => state.basket.value);


  const incrementProductCount = (product) => {
    dispatch(plusBtn({ id: product.id }))
    // dispatch(incrementProductCount({ id: product.id, count: 1}))
  }

  const decremenetProductCount = (product) => {
    dispatch(minusBtn({ id: product.id }))
   
  }

  const removeFromBasket = (product) => {
    // console.log("removed")
    dispatch(removeProduct({ id: product.id }))
    toast.success("deleted sucsessfully");
  }
  const totalprice = basket.reduce((total, product) => {
   
    return total + (product.count * product.price)

  }, 0)

  const reset=()=>{
    dispatch(resetAll())
    toast.success("All products are deleted")

  }

  return (
    <div style={{ color: "white" }}>




      <section className="basket-container">
        <h1 style={{ textAlign: "center", fontSize: "40px" }}>Basket</h1>
        <div className="container">
          <div className="row">
            {
              basket ? (
                basket.map((product) => (
                  <div key={product.id} className="basket-item" style={{ color: "black", marginTop: "40px", marginBottom: "30px" }}>
                    <div className="image">
                      <img
                        src={product.images}
                        alt="Product Image"
                      />
                    </div>
                    <h6 className="title">{product.title}</h6>
                    <p className="category">{product.category}</p>
                    <p className="price">{(product.price.toFixed(2) * product.count).toFixed(2)}AZN</p>
                    <div className="count-area">
                      <button className="minus-btn" disabled={product.count === 0} onClick={() => { decremenetProductCount(product) }}  >-</button>
                      <p className="count" color='black'>{product.count}</p>
                      <button className="plus-btn" onClick={() => { incrementProductCount(product) }}>+</button>
                    </div>
                    <button className="btn btn-danger" onClick={() => { removeFromBasket(product) }}>Remove</button>
                  </div>
                )

                )
              ) : (<p>basket is empty</p>)
            }

            <button className="btn btn-danger" onClick={() => { reset() }}>DeleteAll</button>
            <div className="bottom">
              <Link to='/' style={{ color: "white" }} >back</Link>
              <h4>Total: <span className="total-price">{totalprice.toFixed(2)}</span></h4>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  )
}

export default Basket
