import React from "react";
import { Link,useLocation, useHistory } from "react-router-dom";
import  useAuth from "../../hoock/useAuth";


// import { useFirebase } from "../../hoock/useFirebase";



import "./Login.css";

const Login = () => {
//destructure from useAuth
const {googleSignin,user}= useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri= location.state?.from || "shop"
    
  
  const formSubmit = (event) => {
    event.preventDefault();
    console.log("yes submit");
  
  };
  
//   const{googleSignin,user}=useFirebase()
const GoogleSigninLocation=()=>{
googleSignin()
.then((result)=>{
history.push(redirect_uri)
})
}
 
//react hook location use
console.log(location)
console.log("came from", location.state?.from)

  return (
    
      <div className="login-form">
        <div>
          <h2>Please Login</h2>
          
          <form action="" onSubmit={formSubmit}>
            <input type="email" placeholder="Enter your email" />
            <br />

            <input type="password" placeholder="Enter your password" />
            <br />
            <input type="submit" />
            <br />
          </form>
          <br />
          <div>
            <button onClick={GoogleSigninLocation} className="regular-btn">Sign in with google</button>
            <br />
            <br />
            <span>New in Ema-Jhon?</span><span><Link to="/register">Register Please</Link></span>
          </div>
        </div>
      </div>
    
  );
};

export default Login;
