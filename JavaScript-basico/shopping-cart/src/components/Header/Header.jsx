import React from 'react';
import SeachBar from '../SeachBar/SeachBar';
import './Header.css';
import CartButton from '../CartButton/CartButton';

function Header(){
  return(
    <header className='header' >
      <div className="container">
        <SeachBar/>
        <CartButton/>
      </div>
    </header>
  );
}


export default Header;
