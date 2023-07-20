import React,{useState} from 'react';
import {TbSearch} from 'react-icons/tb';
import './SeachBar.css';
import fetchProducts from '../../api/fetchProducts';


function SeachBar(){

  const [seachValue,setSeachValue] = useState('');
  const handleSeach = async (event)=>{
    event.preventDefault();
    const products = await fetchProducts(seachValue);
    setSeachValue('');
    console.log(products);

  };
  return(
    <form className='seach-bar' onSubmit={handleSeach}>
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
