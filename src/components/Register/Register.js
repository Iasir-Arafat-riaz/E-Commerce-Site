import React from 'react';

const Register = () => {
    const userRegister =(event)=>{
        event.preventDefault()
        console.log("user submit")
    }
    return (
        <div className="login-form">
            <div>
                <h2>Register Please</h2>
                <form onSubmit={userRegister} action="">
                    <input type="text"  placeholder="please enter your name"/>
                    <br />
                    <input type="email" placeholder="enter your email" />
                    <br />
                    <input type="password" placeholder="enter password" />
                    <br />
                    <input type="password" placeholder="re-enter password" />
                    <br />
                    <input type="submit" />
                </form>
                <br /><br />
                <div>---------OR---------</div>
                <button className="regular-btn">Sign in with google</button>
            </div>
            
        </div>
    );
};

export default Register;