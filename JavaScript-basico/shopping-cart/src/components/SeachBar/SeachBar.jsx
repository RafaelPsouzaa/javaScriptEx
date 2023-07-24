import React,{useState,useContext} from 'react';
import {TbSearch} from 'react-icons/tb';
import './SeachBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';


function SeachBar(){

  const{setProducts,setLoading} = useContext(AppContext);
  const [seachValue,setSeachValue] = useState('');
  const handleSeach = async (event)=>{
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(seachValue);
    setProducts(products);
    setLoading(false);
    setSeachValue('');

  };
  return(
    <form className='seach-bar' onSubmit={handleSeach}>
      {name}
      <input type="search"
        value={seachValue}
        placeholder='Buscar Produto' 
        className='seach__input' 
        onChange={({target}) => setSeachValue(target.value)}
        required
      />
      
      <button type='submit' className='seach__button'>
        <TbSearch/>
      </button>
    </form>
  );
}

export default SeachBar;
