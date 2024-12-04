import React from 'react';
import './Button.css';

const Buttons = ({ text, color,padding }) => {
  return (
    <div style={{ margin: '2rem auto' }}>
      <button style={{ backgroundColor: color,padding:padding}}>{text}</button>
    </div>
  );
};

export default Buttons;
