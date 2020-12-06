import React, { useEffect, useState } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props){

  const [products,setproducts] = useState([]);

  useEffect(()=>{
   const fetchData = async () => {
     const {data} = await  axios.get("http://localhost:3000/api");
     setproducts(data)
   };
   fetchData();
    return ()=>{
//  s
    };

  },[]
     );

return  (  <ul className="products">{
  products.map(product =>
      <li>
        <div className="product">
        <Link to={'/product/' + product._id}>
          <img className="product-image" src={product.image} alt="product" /></Link>
          <div className="product-name"> <Link to={'/product/' + product._id}>{product.name}</Link></div>
          <div className="product-brand">{product.brand} </div>
          <div className="Price">{product.price}</div>
          <div className="product-rating">{product.rating} Stars {product.numReviews}</div>
        </div>
      </li>)
  }
  </ul>);

}

export default HomeScreen;