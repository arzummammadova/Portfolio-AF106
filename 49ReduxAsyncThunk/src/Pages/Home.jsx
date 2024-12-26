import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/ProductSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Cards.css';
import StarIcon from '@mui/icons-material/Star';

const Home = () => {
  const products = useSelector((state) => state.products.products); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts()); 
  }, [dispatch]);

  return (
    <div className='card-container'>
      <div className='cards'>
        {products.length > 0 ? (
          products.map((product) => (
            <div className='card' key={product.id}>
              <p>{product.title.slice(0,20)+"..."}</p> 
              <img src={product.images[0]} alt={product.title} /> 
              <div className="product-desc" style={{display:"flex",justifyContent:"space-between",alignItems:"center "}}>
               <p>{product.price} AZN</p> 
              <div className='rating' ><StarIcon sx={{color:"yellow"}}/>{product.rating}</div>  
              </div> 
             
              <button className='buttonadd' style={{color:"red"}}>Add basket </button>
              {/* <FavoriteIcon/> */}
              <div className="iconheart">
              <FavoriteBorderIcon className='hearticon' />
              </div>
             
            </div>
          ))
        ) : (
          <p >No product available</p> 
        )}
      </div>
    </div>
  );
};

export default Home;
