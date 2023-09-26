import React from 'react';
import propTypes from 'prop-types';
import '../CartItem/CartItem.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
// import formatCurrency from '../useful/formatCurrency';
function CartItem({data}) {
  const{thumbnail , title , price} = data;
  
function CartItem({data}) {
  const {thumbnail,title,price} = data;



  return ( 
    <section className='cart-item'>
      <img src= {thumbnail} alt="imagem do produto " className='cart-item-imagem ' />
      <div className='cart-item-content'>
        <h3 className='cart-item-title'> {title}</h3>
        <h3 className='cart-item-Price'>{price}</h3>

        <button type='button' className='button__remove-item'>
          <BsFillCartPlusFill />
        </button>
      </div>

    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data:propTypes.object
}.isRequired;
