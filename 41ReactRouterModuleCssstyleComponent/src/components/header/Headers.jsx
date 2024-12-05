import React from 'react'
import styled from 'styled-components'


const Header= styled.div`
display:flex;
justify-content:space-between;
align-items:center;
font-weight:400;
`
const SectionHeader=styled.header`
background-color:#212529;
color:white;
padding:20px 0px;
`
const Logo=styled.a`
    color:white;
    text-decoration:none;
    font-size:19px;
   
 
`
const Navbar= styled.div`
display:flex;
color:#8F9D9E;
font-size:14px;
gap:1rem;
`
const Headers = () => {
  return (
    <>
      <SectionHeader>
        <div className="container">
            <Header>
                <Logo>Start Bootstrap</Logo>

                <nav>
                    <Navbar>
                        <li><a href="#header" className='active'>Home</a></li>
                        <li><a href="#about" >About</a></li>
                        <li><a href="#contact" >Contact</a></li>
                        <li><a href="#services" >Services</a></li>

                    </Navbar>

                    
                </nav>
               
            </Header>    
        </div>
        
        </SectionHeader>
    </>
  )
}

export default Headers
