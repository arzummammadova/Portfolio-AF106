import React from 'react'
import styled from 'styled-components';



const Foot = styled.div`
padding:30px 0px;
 background-color:#212529;
 color:#ffffff;
 font-size:14px;
 text-align:center;
 `





const Footer = () => {
    return (
        <Foot>
            <p>Copyright © Your Website 2023</p>
        </Foot>
    )
}

export default Footer
