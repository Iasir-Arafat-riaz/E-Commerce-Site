import React from "react";
import { useHistory } from "react-router";
import useCart from "../../hoock/useCart";
import useProduct from "../../hoock/useProduct";
import { deleteFromDb } from "../../utilities/fakedb";
import clearTheCart from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import OrderItem from "../OrderItem/OrderItem";
 

const Review = () => {
  const [product] = useProduct();
  const [cart, setCart] = useCart();
  console.log(cart);
  console.log(product);
  const addEventHndle = (key) => {
    const removeItem = cart.filter(product=>product.key !== key);
    setCart(removeItem);
    deleteFromDb(key);
  };

//regular way
  const history = useHistory()
//   const historyEvent =()=>{
//     history.push("/placeOrder")
//     clearTheCart()
//     setCart([])
// }


//buttond hndler event continue with shipping component

  const historyEvent =()=>{
    history.push("/shipping")
   
}



  return (
    <div className="shop-container">
      <div className="products">
        {cart.map((product) => (
          <OrderItem
            product={product}
            key={product.key}
            addEventHndle={addEventHndle}
          ></OrderItem>
        ))}
      </div>
      <div className="cart">
        <Cart carts={cart}>
          {/* button handler for use history  */}
        {/* <button onClick={historyEvent} className="regular-btn">Place order</button> */}
        <button onClick={historyEvent} className="regular-btn">Procced to Shipping</button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
