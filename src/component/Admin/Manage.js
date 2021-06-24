import React, { useEffect, useState } from 'react';
import ManageComponent from './ManageComponent';
import './Admin.css'
const Manage = () => {
    const [manage,setManage]= useState([]);
    useEffect(()=>{
     fetch('https://safe-anchorage-98101.herokuapp.com/events')
     .then(res=> res.json())
     .then(data=> setManage(data))
       },[])
       return (
           <div className="manageProduct">
               <table>
                   <tr>
                   <th>Product</th>
                   <th>Product</th>
                   <th>Product</th>
                   <th>Product</th>
                   </tr>
               { 
                   manage.map(product=><ManageComponent products={product}></ManageComponent>)
               }
               </table>
           </div>
       );
   };

export default Manage;