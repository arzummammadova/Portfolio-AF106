import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import rightarrow from '../../assets/icons/rightarrow.svg';
import leftarrow from '../../assets/icons/leftarrow.svg';
import Productsslide from '../Productsslide';
import { setProducts } from '../../redux/features/productSlicer';
import { Link } from 'react-router-dom';

const SellingProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(setProducts()); 
  }, [dispatch]);

  return (
    <div>
      <section id="sellingproducts">
        <div className="container">
          <div className="featuredproducts">
            <div className="featuredproducts_title">
              <h2>Best Seller</h2>
              <div className="featuredproducts_title_right">
                <Link to="/shoulderbag">View all products</Link>
                <div className="right-arroww">
                  <img src={rightarrow} alt="Right Arrow" />
                </div>
              </div>
            </div>
            <div className="featuredproducts_cards">
              <div className="left-arrow">
                <img className="" src={leftarrow} alt="Left Arrow" />
              </div>
              <div className="right-arrow">
                <img className="" src={rightarrow} alt="Right Arrow" />
              </div>

              <Productsslide products={products} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellingProducts;
