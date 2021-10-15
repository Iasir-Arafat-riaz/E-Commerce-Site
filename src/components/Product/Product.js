import React from "react";
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const element = <FontAwesomeIcon icon={faShoppingCart} />
  // console.log(props.product);
  const { name,img,seller,price,stock } = props.product;
  return (
    <div className="product">
      <div>
          <img src={img} alt="" />
      </div>
      <div className="informations">
        <p className="product-name">{name}</p>
        <p>by: {seller}</p>
        <p>${price}</p>
        <p>only {stock} left in stock - order soon</p>
        <button onClick={()=>props.btn(props.product)} className="regular-btn"> {element} add to cart</button>
      </div>
    </div>
  );
};

export default Product;
