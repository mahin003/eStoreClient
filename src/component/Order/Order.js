import React, { useContext } from 'react';
import  { useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Orderlist from './Orderlist';

const Order = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders,setOrders]= useState([]);
     console.log("loggedInuser ", loggedInUser.email)
    useEffect(()=>{
        fetch(`https://safe-anchorage-98101.herokuapp.com
/UserOrders/${loggedInUser.email}`)
        .then(res=> res.json())
        .then(data=> {setOrders(data)
        console.log(data)
        }
        )
          },[]);

    return (
        <div>
            <table>
                   <tr>
                   <th>UserEmail</th>
                   <th>Product</th>
                   <th>Quantity</th>
                   <th>Price</th>
                   </tr>
               { 
                   orders.map(shoppingList=><Orderlist shoppingLists={shoppingList}></Orderlist>)
               }
               </table>
        </div>
    );
};

export default Order;