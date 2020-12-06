import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';


function ProductScreen(props){
    console.log(props.match.params.id);
//    const s = "dasda";
    const produt = data.products.find(x=>x._id === props.match.params.id)
return  <div>
  
  <div  className="details"   >
  <div className="Back-to-Result">
      <Link to="/">Back</Link>
  </div> 
  <div  className="detail-image"   > 
      <img   src={produt.image}   alt="product"></img>
  </div>
  <div  className="detail-info"   >
      <ul>
          <li>
              <h4>{produt.name} </h4>
          </li>
          <li>
              {produt.rating} Stars reviews {produt.numReviews} 
          </li>
          <li>
             Price: <b>{produt.price} </b>
          </li>
          <li>
              discription<div>
              <h4>{produt.discription} </h4>
              </div>
          </li>
      </ul>
  </div>
  <div className="detail-action">
<ul>
    <li>
        price:{produt.price}
    </li>
    <li>
        Status:{produt.status}
    </li>
    <li>
        QTY:<select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select>
    </li>
    <li>
        <button  className="button">Add to cart</button>
    </li>
</ul>
  </div>
  </div>
</div>

}

export default ProductScreen;