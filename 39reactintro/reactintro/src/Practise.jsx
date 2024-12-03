
import React from 'react'

const Practise = () => {
    const handleClick = () => {
       const p=document.querySelector('p');
       p.style.color='white';
       p.textContent="textClicked";
      }
  return (
    <>
      <div className='box'>
        <h1>Hello World!</h1>
        <p>This is a practice component.</p>
        
        <button onClick={handleClick}>Click Me</button>
      </div>
      
    </>
    
  )
}

export default Practise;





