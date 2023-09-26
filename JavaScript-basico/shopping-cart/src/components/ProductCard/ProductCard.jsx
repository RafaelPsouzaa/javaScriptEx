import React, { useContext } from 'react';
import propTypes from 'prop-types';
import '../ProductCard/ProductCard.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../useful/formatCurrency';
import AppContext from '../../context/AppContext';


function ProductCard({data}) {
  const {title,thumbnail,price} = data;


  const {cartItems,setCartItem} = useContext(AppContext);

  const handleAddCart = () => {
    setCartItem([ ...cartItems, data ]);
  };
    
  return ( 
    <section className='product-card'>
      <img src= {thumbnail.replace(/\w\.jpg/gi,'W.jpg')}
        alt='product' 
        className='card__image'
      />
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price,'BRL')}</h2>
        <h2 className="card__title">{title} </h2>
      </div>
      <button type='button' className='button__add-cart' onClick={handleAddCart}>
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}
//https://www.youtube.com/watch?v=PbnaIlnOsr8&list=RDCMUC5QX7p9EavdNa2m25cITbzg&index=4&ab_channel=ManualdoDev
export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
