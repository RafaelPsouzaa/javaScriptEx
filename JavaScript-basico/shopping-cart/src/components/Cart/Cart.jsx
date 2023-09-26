import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
function Cart() {
  const {cartItems} = useContext(AppContext);
  return ( 
    <section className='cart'>
      <div className='cart-items'> <CartItem data={{thumbnail:'',title:'',price:'123'}}/></div>
      <div className='cart-items'>
        {cartItems.map(( CartItem ) => <CartItem key={CartItem.id} data={CartItem}  />)}
        
      </div>
      <div className='cart-resume'>resumo do carrinho</div>
    </section>
       
  );
}

export default Cart;
