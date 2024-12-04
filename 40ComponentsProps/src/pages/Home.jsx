import React from 'react'
import Headerr from '../components/header/Headerr'
import Services from '../components/servicesour/Services'
import Ourteam from '../components/ourteam/Ourteam'
import Pricing from '../components/price/Pricing'
import Contact from '../components/contactus/Contact'
const Home = () => {
  return (
    <div>
      <Headerr />
     <Services/>
     <Ourteam/>
     <Pricing/>
     <Contact/>
    </div>
  )
}

export default Home
