import React, { useState, useEffect } from 'react';
import bestseller from '../assets/images/bestseller.png';
import heartIcon from '../assets/icons/hearticon.svg';
import heartIconFill from '../assets/icons/hearticonfill.svg';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, updateQuantity } from '../redux/features/basketSlice';
import { addAndRemoveToWishlist } from '../redux/features/wishlistSlicer';
import { toast, ToastContainer } from 'react-toastify';
import Tabs from './tabs/Tabs';
import Productsslide from './Productsslide';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
    const basketItems = useSelector((state) => state.basket.value); 
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [heart, setHeart] = useState({});
  const [previousImageIndex, setPreviousImageIndex] = useState(0);
  const [text, setText] = React.useState('');
  const [comments, setComment] = useState([]);


  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
  const handleImageClick = (index) => {
    setPreviousImageIndex(activeImageIndex); 
    setActiveImageIndex(index);  
  };

  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const filteredProducts = useSelector((state) => state.product.filteredProducts);
  const product = filteredProducts.find((product) => product.id === id);

  const addToBasketHandler = (product) => {
    dispatch(addToBasket(product));
    toast.success("Added to the basket");
  };

  const handleHeartClick = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    heartToggle(product);
  };

  const heartToggle = (product) => {
    dispatch(addAndRemoveToWishlist(product));
    setHeart((prev) => ({
      ...prev,
      [product.id]: !prev[product.id],
    }));

    const existingProduct = wishlist.find((item) => item.id === product.id);

    if (!existingProduct) {
      toast.success(`Added to wishlist!`);
    } else {
      toast.info(`Removed from wishlist!`);
    }
  };
const handleUpdateQuantity = (productId, amount) => {
    dispatch(updateQuantity({ id: productId, amount }));
  };

 
  const addcommet = (e) => {
    e.preventDefault();
    if (text.trim()) {
      setComment([...comments, text]);
      setText(''); 
    }
  };

  const images = [product?.image, product?.image, product?.image, product?.image];

  return (
    <div>
      <section id="details">
        <div className="container">
          <div className="road" style={{ marginLeft: '5rem' }}>
            <Link to="/">Home</Link>
            <span> &gt; </span>
            <Link to={`/details/${product?.id}`} className="active-road">Details</Link>
          </div>

          <div className="product-info">
            <div className="left-side">
              <div className="change-image-slider">
                <div className="up-arrow" onClick={() => setActiveImageIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)}>
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8L8 2L14 8" stroke="#212121" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="square" />
                  </svg>
                </div>
                <div className="change-image">
                  {images.map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`Image ${index + 1}`}
                      className={`changeimg ${index === activeImageIndex ? 'active-border' : ''}`}
                      onClick={() => handleImageClick(index)}  
                    />
                  ))}
                </div>
                <div className="arrow-down" onClick={() => setActiveImageIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)}>
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L8 8L14 2" stroke="black" strokeWidth="2" strokeLinecap="square" />
                  </svg>
                </div>
              </div>

              <div className="main-img">
                <div
                  className="heart"
                  onClick={(e) => handleHeartClick(e, product)}
                >
                  <img
                    src={wishlist.some((item) => item.id === product.id) ? heartIconFill : heartIcon}
                    alt="Heart Icon"
                  />
                </div>
                <p className="hero__left__desc price-btn">30% off</p>
                <img
                  className={`main ${activeImageIndex !== previousImageIndex ? 'image-changing' : ''}`}
                  src={images[activeImageIndex]}  
                  alt="Main product"
                />
              </div>
            </div>

            <div className="right-side">
            
              <div className="product-titlee">{product?.title}</div>
              <div className="product-price">${product?.price}</div>
              {basketItems.map((product) => (
            <div className="quantity">
                        <p>Quantity: {product.count || 1}</p>
                        <button className="decrement" onClick={() => handleUpdateQuantity(product.id, -1)}>-</button>
                        <button className="increment" onClick={() => handleUpdateQuantity(product.id, 1)}>+</button>
                      </div>))}
                      
              <div className="add-to-cart-btn" onClick={(e) => {
                e.stopPropagation();
                addToBasketHandler(product);
              }}>
                Add to cart
              </div>
            
            </div>
          </div>

          <div className="product-container"></div>
        </div>
      </section>
      <div className="commentsession" style={{maxWidth:"600px",margin:"100px auto",fontSize:"20px"}}>
        <h3>Add comment...</h3>
        <Textarea style={{fontSize:"16px"}}
        placeholder="Type in here…"
        value={text}
        onChange={(event) => setText(event.target.value)}
        minRows={2}
        maxRows={4}
        startDecorator={
          <Box sx={{ display: 'flex', gap: 0.5, flex: 1 }}>
               <IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
              👍
            </IconButton>
            <IconButton variant="outlined" color="neutral" onClick={addEmoji('❤️')}>
            ❤️
            </IconButton>
            <IconButton variant="outlined" color="neutral" onClick={addEmoji('😍')}>
              😍
            </IconButton>
         
       
            <Button sx={{ ml: 'auto' }} onClick={addcommet}>Send</Button>

          
          </Box>
          
        }
        endDecorator={
          <Typography level="body-xs" sx={{ ml: 'auto' }}>
            {text.length} character(s)
          </Typography>
        }
        sx={{ minWidth: 300 }}

       
      /> 
      <ul>
        {
          comments.map((comment,index)=>(
            <li key={index}>{comment}</li>
          ))
        }
      </ul>
      </div>
     

      <Tabs />

      <div id="featuredproducts">
        <div className="container">
          <div className="featuredproducts">
            <div className="featuredproducts_title">
              <h2>Same Category</h2>
              <div className="featuredproducts_title_right">
                <Link to="/shoulderbag">View all products</Link>
              </div>
            </div>
            <div className="featuredproducts_cards">
              <Productsslide selectedCategory={product?.category} />
            </div>
        
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Details;
