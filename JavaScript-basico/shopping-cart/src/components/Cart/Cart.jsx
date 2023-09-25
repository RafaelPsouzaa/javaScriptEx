import React from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
function Cart() {
  return ( 
    <section className='cart'>
      <div className='cart-items'> <CartItem/></div>
      <div className='cart-resume'>resumo do carrinho</div>
      carrinho
    </section>
       
  );
}

export default Cart;
