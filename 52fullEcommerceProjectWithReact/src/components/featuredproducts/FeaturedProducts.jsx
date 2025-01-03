import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setProducts } from '../../redux/features/productSlicer';
import Productsslide from '../Productsslide';
import { Link } from 'react-router-dom';
const FeaturedProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(setProducts()); 
  }, [dispatch]);

  return (
    <div>
      <div id="featuredproducts">
        <div className="container">
          <div className="featuredproducts">
            <div className="featuredproducts_title">
              <h2>Featured Products</h2>
              <div className="featuredproducts_title_right">
                <Link to="/shoulderbag">View all products</Link>
                {/* <div className="right-arroww">
                  <img src={rightarrow} alt="Right Arrow" />
                </div> */}
              </div>
            </div>
            <div className="featuredproducts_cards">
              {/* <div className="left-arrow">
                <img src={leftarrow} alt="Left Arrow" />
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="Right Arrow" />
              </div> */}
              <Productsslide /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
