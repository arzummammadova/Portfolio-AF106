import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AllProducts from '../components/AllProducts';
import { sortProductByAZ, sortProductByHighToLow, sortProductByLowToHigh, sortProductByZA } from '../redux/features/productSlicer';
// import { setProducts, sortProductbyaz, sortProductbylowtohight,sortProductbyza, sortProducthightolow} from '../redux/features/productSlicer'

const Shoulderbag = () => {
  
   const dispatch=useDispatch();
   const products=useSelector((state)=>state.product.products)
 
   const sortaz=()=>{
    dispatch(sortProductByAZ());
   }
   const sortza=()=>{
    dispatch(sortProductByZA())
   }
   const lowtohigh=()=>{
    dispatch(sortProductByLowToHigh())
   }

   const hightolow=()=>{
     dispatch(sortProductByHighToLow())
   }


  
   
  return (
    <div>
      <div className="shoulder">
        <div className="container">
          <div className="road">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <Link to="/shoulderbag" className="active-road">Shoulder Bags</Link>
          </div>

          <h1>Shoulder Bags</h1>
          <section id="featuredproducts" className="shoulderproducts" style={{ padding: '0px' }}>
            <div className="container container-sh">
              <div className="featuredproducts">
                <div className="featuredproducts_title">
                  <div className="featuredproducts_title_right">
                    <div className="sort-options">
                      <label htmlFor="sort-select" className="sort-label">Sort by</label>
                      <button className='sort' onClick={() => sortaz()}>A-Z</button>
                      <button className='sort' onClick={()=>sortza()} >Z-A</button>
                      <button className='sort' onClick={()=>lowtohigh()} >Low to High</button>
                      <button className='sort' onClick={()=>hightolow()} >High to Low</button>
                    </div>
                  </div>
                </div>

                <AllProducts />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shoulderbag;
