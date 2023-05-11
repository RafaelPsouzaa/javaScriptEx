import React from 'react';

function Header(){
  return(
    <header className='header' style={{background:'red'}} >
      <div className="container">
        <form>
          <input type="search"
            placeholder='Buscar Produto' 
            className='seach__input' 
            required
          />

          <button type='submit'>
            icone
          </button>
        </form>
      </div>
    </header>
  );
}


export default Header;
