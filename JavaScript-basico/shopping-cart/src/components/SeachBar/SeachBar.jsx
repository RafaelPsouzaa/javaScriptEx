import React,{useState} from 'react';
import {TbSearch} from 'react-icons/tb';
import './SeachBar.css';

function SeachBar(){

  const [seachValue,setSeachValue] = useState('');
  return(
    <form className='seach-bar'>
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
