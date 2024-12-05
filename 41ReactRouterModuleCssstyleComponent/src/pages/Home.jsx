import React from 'react'
import Headers from '../components/header/Headers'
import Hero from '../components/hero/Hero'
import Card from '../components/cards/Card'
import Pay from '../components/pay/Pay'
import Customer from '../components/customer/Customer'
import Getintouch from '../components/getintouch/Getintouch'
import Footer from '../components/footer/Footer'
const Home = () => {
    
  return (
    <div>
      <Headers/>
      <Hero/>
      <Card/>
      <Pay/>
      <Customer/>
      <Getintouch/>
      <Footer/>
    
    </div>
  )
}

export default Home
