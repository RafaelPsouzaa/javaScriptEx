import React from 'react';
function CartItem() {
  return ( 
    <section className='cart-item'>
      <img src="" alt="imagem do produto " className='cart-item-imagem ' />
      <div className='cart-item-content'>
        <h3 className='cart-item-title'>Titulo do produto</h3>
        <h3 className='cart-item-Price'>R$ 123,00</h3>

        <button type='button' className='button__remove-item'> </button>
      </div>

    </section>
  );
}

export default CartItem;
