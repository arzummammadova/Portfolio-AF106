import React from 'react'
import productcard1 from '../../assets/images/productcard1.png'
import productcard2 from '../../assets/images/productcard2.png'
import productcard3 from '../../assets/images/productcard3.png'
import productcard4 from '../../assets/images/productcard4.png'
const Sectionproduct = () => {
  return (
    <div> 
<div  id="product">
<div class="container">
                <div class="product">
                    <div class="product__cards">
                        <div class="product__cards__card">
                            <p>Shoulder bags</p>
                            <figure>
                                <img class="productimg1" src={productcard1} alt=""></img>
                            </figure>
                        </div>
                        <div class="product__cards__card">
                            <p>Hand bags</p>
                            <figure>
                                <img src={productcard2} alt=""></img>
                            </figure>
                        </div>
                        <div class="product__cards__card">
                            <p>Backpack</p>
                            <figure>
                                <img src={productcard3} alt=""></img>
                            </figure>
                        </div>
                        <div class="product__cards__card">
                            <p>Evenings bags</p>
                            <figure>
                                <img src={productcard4} alt=""></img>
                            </figure>

                        </div>

                    </div>
                
                </div>
            </div>
           
</div>
        
          
           
           
 </div>
      

  )
}

export default Sectionproduct
