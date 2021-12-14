import React from "react";
import "./OrderItem.css";
import {Button} from "react-bootstrap"

const OrderItem = (props) => {
  const { name, img, price, quantity,key } = props.product;
  const{addEventHndle}=props
  return (
    <div className="order-item m-2">

      <div className="product">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="itemsDetail">
          <div>
            <h4>{name}</h4>
            <h3> price{price}</h3>
            <h5>total selected{quantity}</h5>
          </div>
          <div>
          <Button onClick={()=>addEventHndle(key)} variant="danger">Remove</Button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
