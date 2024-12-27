import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/ProductSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ToastContainer, toast } from 'react-toastify';
import './Cards.css';
import StarIcon from '@mui/icons-material/Star';
import { addWishList, getWistListProducts, removefromWishlist  } from '../redux/wishlistSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { addToBasket } from '../redux/basketSlice';

const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from local storage:', err);
    return undefined;
  }
};

const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Error saving state to local storage:', err);
  }
};



const Home = () => {
  const [user, setUser] = useState(null);
  const [isFav, setIsFav] = useState(loadState('wishlistFavorites') || {});
  const products = useSelector((state) => state.products.products);
  const wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const basket = useSelector((state) => state.basket.value);
 const {id}=useParams();
  // console.log(id)


  const fetchUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      const loginUser = response.data.find(user => user.isLogin === true);
      setUser(loginUser);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
    dispatch(getProducts());
    dispatch(getWistListProducts());
  }, [dispatch]);


  const details = (id) => {
    navigate(`/details/${id}`);
  };
  
  useEffect(() => {
    saveState('wishlistFavorites', isFav); 
  }, [isFav]);

  const fav = (product) => {
   
    dispatch(addWishList(product));
    toast.success('Added to wishlist');
  };

  const removeFromWishlist = (id) => {
    dispatch(removefromWishlist(id));
    toast.error('Removed from wishlist');
  };

  const AddToBasket=(product,e)=>{
    e.stopPropagation();
    dispatch( addToBasket(product));
    toast.success('Added to basket sucsessfully');
  }

  const handleLoginRedirect = () => {
    toast.info("Please log in to add to wishlist!");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const toggleFavorite = (productId, product,e) => {
    e.stopPropagation();
    if (user) {
      if (isFav[productId]) {
        removeFromWishlist(productId);
      } else {
        fav(product);
      }
      setIsFav((prevState) => ({
        ...prevState,
        [productId]: !prevState[productId],
      }));
    } else {
      handleLoginRedirect();
    }
  };



  return (
    <div className='card-container'>
      <div className='cards'>
        {products.length > 0 ? (
          products.map((product) => (
          
            <div className='card'  onClick={()=>{details(product.id)}} key={product.id} >
              <p>{product.title.slice(0, 20) + "..."}</p>
              <img src={product.images[0]} alt={product.title} />
              <div className="product-desc" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p>{product.price} AZN</p>
                <div className='rating'><StarIcon sx={{ color: "yellow" }} />{product.rating}</div>
              </div>

              <button className='buttonadd' style={{ color: "red" }} onClick={(e)=>AddToBasket(product,e)}>Add to basket</button>

              <div className="iconheart">
                <button 
                  onClick={(e) => toggleFavorite(product.id, product,e)}
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  {isFav[product.id] ? (
                    <FavoriteIcon className="hearticon" />
                  ) : (
                    <FavoriteBorderIcon className="hearticon" />
                  )}
                </button>
              </div>
            </div>

          ))
        ) : (
          <p>No product available</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
