import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
// import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './HomeDesign.css';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();

    const { id } = useParams();
    console.log('Id is ', id);
    const [checkout, setCheckout] = useState({});
    
    useEffect(()=>{
        fetch(`https://safe-anchorage-98101.herokuapp.com/chekcout/${id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setCheckout(result);
            })

        },[])
    


        
    const OnProced=()=>{

    const eventdata={
        email: loggedInUser.email,
        productName: checkout.name,
        productQuantity: checkout.quantity,
        productPrice: checkout.price

    }


 const url = `    https://safe-anchorage-98101.herokuapp.com
/addUserInfo`;
 fetch(url,{
     method: "POST",
     headers:{
         'content-type': 'application/json'
     },
     body:JSON.stringify(eventdata)
 }).then(res=> console.log('serverForUser ',res))

console.log("eventUser ",eventdata);
alert("Data added successfully");
history.push('/thanks')


    }

    return (
        <div className="checkout">
            
            <table>
                <tr>
                    <th>
                        Product Name
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Quantity
                    </th>
                </tr>
                  <td>{checkout.name}</td>
                  <td>{checkout.price}</td>
                  <td>1</td>
            </table>
            <button onClick={OnProced}>Proced</button>
        </div>
    );
};

export default Checkout;