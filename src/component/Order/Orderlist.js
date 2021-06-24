import React from 'react';

const Orderlist = (props) => {
    // console.log("order ",props)
    return (
       
            <tr>
            <td>{props.shoppingLists.email}</td>
            <td>{props.shoppingLists.productName}</td>
            <td>{props.shoppingLists.productQuantity}</td>
            <td>{props.shoppingLists.productPrice}</td>                    
         </tr>
          
    );
};

export default Orderlist;