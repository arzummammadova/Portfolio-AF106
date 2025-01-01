import React from 'react'
import Products from '../components/Products.jsx/Products'
import Hero from '../components/hero/Hero'
import Transport from '../components/transport/Transport'
import Sectionproduct from '../components/sectionproduct/Sectionproduct'
import FeaturedProducts from '../components/featuredproducts/FeaturedProducts'
import SellingProducts from '../components/sellingproducts/SellingProducts'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Transport/>
      <Sectionproduct/>
      <FeaturedProducts/>
      <SellingProducts/>
      <FeaturedProducts/>
      {/* <Products/> */}
    

    </div>
  )
}

export default Home
