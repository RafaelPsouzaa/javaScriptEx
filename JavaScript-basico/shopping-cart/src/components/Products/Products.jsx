import React,{useEffect, useContext} from 'react';
import '../Products/Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from'../ProductCard/ProductCard.jsx';
import Loading from '../loading/Loading';
import AppContext from '../../context/AppContext';
function Products() {
  const {products,setProducts,loading,setLoading} = useContext(AppContext);
  

  useEffect(() =>{

    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });//the then getting the fetchProducts response
   
  },[]);
  console.log(products);
  return ( 
    (loading &&<Loading  />) || (<section className="products container">
      {products.map((product) =>  <ProductCard key={product.id} data ={product}/>)}
    </section>)
    
  );
}

export default Products;
