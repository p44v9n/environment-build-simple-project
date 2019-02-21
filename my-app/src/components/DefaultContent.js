import React from 'react';
import Logo from '../assets/logo.png'

const defaultContent = () => {
  return(
    <div className="default-content">
      <img className="logo" src={Logo} alt="logo"/>
      <h1>Click Person Names to see the person's profile here!!!!!</h1>
    </div>
  );
}

export default defaultContent;