import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [displayProduct, setDisplayProduct] = useState([]);
  const [pageCount,setPageCount]=useState(0)

  useEffect(() => {
    fetch("http://localhost:5000/shop")
      .then((respo) => respo.json())
      .then((data) => {
        setProducts(data.all);
        setDisplayProduct(data.all);
        const count = data.count
        const pageNumber = Math.ceil(count/10)
        setPageCount(pageNumber)
      });
  }, []);
console.log(pageCount)
  useEffect(() => {
    if (products.length) {
      const getData = getStoredCart();
      const myCart = [];

      for (const singleKey in getData) {
        console.log(singleKey, getData[singleKey]);
        const addedProduct = products.find(
          (product) => product.key === singleKey
        );
        if (addedProduct) {
          const quantity = getData[singleKey];
          addedProduct.quantity = quantity;
          // console.log(addedProduct)
          myCart.push(addedProduct);
        }
      }
      setCart(myCart);
      console.log(myCart);
    }
    //set useEffect dependency for skiping undefined
  }, [products]);

  const [cart, setCart] = useState([]);
  const handleBtn = (product) => {
    // const newCart = [...cart, product];
    // setCart(newCart);

    // another wat for bug fixing
    const exist = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exist) {
      const filter = cart.filter((pd) => pd.key !== product.key);
      exist["quantity"] = exist["quantity"] + 1;
      newCart = [...filter, exist];
    } else {
      product["quantity"] = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key);
  };

  //for input
  const handleInput = (event) => {
    const searchText = event.target.value;
    const matchedproduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProduct(matchedproduct);
    console.log(matchedproduct.length);
  };

  return (
    <div>
      <div className="search">
        <input
          onChange={handleInput}
          className="search-input"
          type="text"
          placeholder="search here"
        />
      </div>
      <div className="shop-container">
        <div className="products">
          <h1>products found : {products.length}</h1>
          {displayProduct.map((product) => (
            <Product product={product} btn={handleBtn} key={product.key} />
          ))}
        </div>
        <div className="cart">
          <Cart carts={cart}>
            <Link to="review">
              <button className="regular-btn">Review your order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
