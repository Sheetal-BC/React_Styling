import React, { useState } from 'react';

import './Button.css';

const Button = props => {
  const [isActive, setIsActive] = useState(false);

  const handleClick =() =>{
    setIsActive(true);
  }

  return (
    <button style={{backgroundColor:isActive ? 'salmon':' '}} type={props.type} className="button" onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default Button;