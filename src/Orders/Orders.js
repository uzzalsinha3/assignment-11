import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';

const Orders = () => {

    const [order, setOrder] = useState([]);
           
    

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('https://warm-eyrie-98471.herokuapp.com/items?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            <ul>
             {order.email}
            </ul>
            
        </div>
    );
};

export default Orders;