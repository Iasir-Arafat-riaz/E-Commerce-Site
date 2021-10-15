import React from "react";
import { Link } from "react-router-dom";

import "./Cart.css";

const Cart = (props) => {
  const { carts } = props;
  console.log(props.children)
  

  const all = carts.reduce((previous, current) => previous + current.price, 0);
  console.log(carts);
  
  let totalQuantity= 0;
  let price = 0;


  for (const cart of carts) {
    
    if(!cart.quantity){
      cart.quantity=1
    }
    console.log(cart)
    price = price + cart.price*cart.quantity;
     totalQuantity = totalQuantity+cart.quantity;
    console.log(totalQuantity)
    
  }
  let shippingCost = 0;
  if (price < 100) {
    shippingCost = 0;
  } else if (price < 200) {
    shippingCost = 15;
  } else if (price < 500) {
    shippingCost = 35;
  } else {
    shippingCost = 50;
  }
  const totalWithoutTx = price + shippingCost;
  const tax = price * 0.1;

  const subTotal = totalWithoutTx + tax;

  return (
    <div>
      <h3 className="center">Order Summary</h3>
      <p className="center">Items Order {totalQuantity}</p>
      <h4>reduce: {all.toFixed(2)} </h4>
      <p>items price : ${price.toFixed(2)} </p>
      <p>Shipping : ${shippingCost}</p>
      <p>Total before tax: ${totalWithoutTx.toFixed(2)}</p>
      <p>Estimated tax: ${tax.toFixed(2)}</p>
      <p>
        <span>Order Total : ${subTotal.toFixed(2)}</span>
      </p>
      
      {props.children}
    </div>
  );
};

export default Cart;
