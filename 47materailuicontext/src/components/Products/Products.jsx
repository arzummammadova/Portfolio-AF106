import React from 'react'
import { productList } from '../../context/UserContext';
const Products = () => {

    // const products=productList();
    const products = productList();
    return (
        <div>
            
                <ul>
                    {products.map((product) => (
                            <li key={product.id}>
                                <p>{product.title}</p>
                                <img src={product.image} alt="" />
                                
                            </li>
                        ))}


                </ul>

            
        </div>

    )
}

export default Products
