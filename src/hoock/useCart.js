import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";
import axios from "axios";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = getStoredCart();

    const keys = Object.keys(savedCart);
    console.log(keys);
    // axios.post("https://intense-sea-55372.herokuapp.com/shop/keys", keys).then((products) => {
    //   console.log(products);
    // });
    fetch("https://intense-sea-55372.herokuapp.com/shop/keys",{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(keys)
    })
    .then(res=>res.json())
    .then(products=>{
      if (products.length) {
        const savedCart = getStoredCart();
        const storedCart = [];
        for (const key in savedCart) {
          const addedProduct = products.find((product) => product.key === key);
          if (addedProduct) {
            //set quantity
            const setquantity = savedCart[key];
            addedProduct.quantity = setquantity;
            storedCart.push(addedProduct);
          }
        }
        setCart(storedCart);
      }
    })

    
  }, []);
  return [cart, setCart];
};
export default useCart;
