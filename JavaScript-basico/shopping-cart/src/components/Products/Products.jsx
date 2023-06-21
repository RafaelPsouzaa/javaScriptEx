import React,{useState,useEffect} from 'react';
import '../Products/Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from'../ProductCard/ProductCard.jsx';
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() =>{

    fetchProducts('iphone').then((response) => {
      setProducts(response);
      console.log(products);
    });//the then getting the fetchProducts response
   
  },[]);
  console.log(products);
  return ( 
    <section className="products container">
      {
        products.map((product) =>  <ProductCard key={product.id} data ={product}/>)
      }
    </section>
  );
}

export default Products;
