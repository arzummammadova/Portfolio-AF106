import React from 'react'
import { Link } from 'react-router-dom'
import transport from '../../assets/icons/transport.svg'
import transport2 from '../../assets/icons/transport2.svg'
import transport3 from '../../assets/icons/transport3.svg'
import transport4 from '../../assets/icons/transport4.svg'
const Transport = () => {
  return (
    <>
      <div id="transport">
        <div className="container">
          <div className="transport">
            <Link to=''>
              <img src={transport} alt="transport" />
            </Link>
            <Link to=''>
              <img src={transport2} alt="transport" />
            </Link>
            <Link to=''>
              <img src={transport3} alt="transport" />
            </Link>
            <Link to=''>
              <img src={transport4} alt="transport" />
            </Link>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Transport
