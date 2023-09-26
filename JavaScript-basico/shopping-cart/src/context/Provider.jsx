import React, { useState } from 'react';
import propTypes  from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [CartItem, setCartItem] = useState([]);
  const [loading,setLoading] = useState(true);
  const value = {
    products, 
    setProducts,
    loading,
    setLoading,
    CartItem,
    setCartItem
    
  };
  return ( 
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
// https://www.youtube.com/watch?v=PbnaIlnOsr8&t=1408s&ab_channel=ManualdoDev
