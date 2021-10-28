import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import useAuth from "../../hoock/useAuth";
import "./Shipping.css"

const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const history = useHistory();
  const placeOrder = () => {
    history.push("/placeOrder");
  };

  const {user}= useAuth()
  console.log(user)

  return (
    <div className="shipping-div">
      <div>
      <h2>This is shipping component</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        
       <input
       defaultValue={user.displayName}
        placeholder="name"
          id="name"
          {...register("name", { required: true, maxLength: 30 })}
        />
       <input
        defaultValue={user.email}
        placeholder="email"
          id="name"
          {...register("email", { required: true, maxLength: 30 })}
        />
        {/* {errors.name && errors.name.type === "required" && (
          <span>This is required</span>
        )} */}
        {/* {errors.name && errors.name.type === "maxLength" && (
          <span>Max length exceeded</span>
        )} */}
        <input className="regular-btn" onClick={placeOrder} type="submit" />
      </form>
      </div>
    </div>
  );
};

export default Shipping;
