import React, { useState } from 'react'
import './Counter.css'
import { useRef } from 'react';
const Counter = () => {

//     1) Counter (useRef istifade ederek.)
// 1- Maraqlı dizaynda counter tapırsınız internetdən. Dizayn balın 20% təşkil edir
// 2- Artırıb azaltmaq funksiyası olmalıdır
// 3- Əlavə bir İnput olmalıdır və əlavə 2 btn olmalıdır. Hansı ki, həmin inputa neçə rəqəmini yazsaq və həmin btn-lərə klik etsək o qədər artıb azalmalıdır.

  const[count,setCount]=useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const inputRef = useRef(null);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); 
  };
  const Increment=()=>{
    setCount(count+1)
    triggerAnimation();
  }

  const Decrement=()=>{
    setCount(count-1);
    triggerAnimation();
  
  }

  const counterhanIncrement=()=>{

    const value=Number(inputRef.current.value);
    if(isNaN(value) || value===" " || value==0){
      alert("duz daxil et ");
      return;
    }

    setCount(count=>count+value)
    triggerAnimation();
  }

  const counterhanDecrement=()=>{
    const value=Number(inputRef.current.value);
    setCount(count=>count-value);
    triggerAnimation();

  }

    return (
        <>
            <h1 style={{textAlign:'center'}}>Counter</h1>
            <div className="counter">
                <button className="button" onClick={Decrement}>-</button>
                <div className="input-wrapper">
                    <button  className={`input ${isAnimating ? 'animated' : ''}`} style={{color:count<0 ?'red':'white'}}>{count}</button>
                </div>
                <button className="button" onClick={Increment}>+</button>
            </div>

            <div className="counterthannumber">
             <button onClick={counterhanIncrement}>+</button>
            <input type="text" placeholder='enter number'  ref={inputRef} className='inputnum'/>
            <button onClick={counterhanDecrement}className='dec'>-</button>     
            </div>
          

        </>
    )
}

export default Counter
