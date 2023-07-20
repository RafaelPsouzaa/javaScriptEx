import React,{useState,useEffect} from 'react';
import '../Products/Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from'../ProductCard/ProductCard.jsx';
import Loading from '../loading/Loading';
function Products() {
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(true);

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
