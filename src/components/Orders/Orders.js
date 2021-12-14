import React, { useEffect, useState } from 'react';
import useAuth from '../../hoock/useAuth';

const Orders = () => {
    const [orders,setOrders]=useState([])
    const{user}=useAuth()
    useEffect(()=>{
        fetch(`https://intense-sea-55372.herokuapp.com/order?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
           <div  >
           <h1>This is my orders</h1>
            {
                orders.map(order=><li key={order._id}> {order.name}  {order.email} orderTime:{} phone:{order.phone} date: {order.time}</li>)
            }
           </div>
        </div>
    );
};

export default Orders;