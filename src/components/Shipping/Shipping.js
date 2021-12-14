import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import useAuth from "../../hoock/useAuth";
import clearTheCart, { getStoredCart } from "../../utilities/fakedb";
import "./Shipping.css"

const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) =>{
    const savedCart = getStoredCart()
    console.log(savedCart)
    
    data.order = savedCart
    data.time=new Date()
    console.log(data)
    fetch("https://intense-sea-55372.herokuapp.com/order",{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
     if(data.insertedId){
       alert("your order is confirm")
       reset()
       clearTheCart()
     }
    })
   
    
  };

  const history = useHistory();
  // const placeOrder = () => {
  //   history.push("/placeOrder");
  // };

  const {user}= useAuth()
  // console.log(user)

  return (
    <div className="shipping-div">
      <div>
      <h2>This is shipping component</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        
       <input
       defaultValue={user.displayName}
        placeholder="name"
        
          {...register("name", { required: true})}
        />
       <input
        defaultValue={user.email}
        placeholder="email"
        
          {...register("email", { required: true, })}
        />
       <input
        
        placeholder="phone number"
          
          type="number"
          {...register("phone", { required: true,})}
        />
       <input
        
        placeholder="enter your address"
         
          {...register("address", { required: true })}
        />
        {/* {errors.name && errors.name.type === "required" && (
          <span>This is required</span>
        )} */}
        {/* {errors.name && errors.name.type === "maxLength" && (
          <span>Max length exceeded</span>
        )} */}
        <input className="regular-btn"  type="submit" />
      </form>
      </div>
    </div>
  );
};

export default Shipping;
