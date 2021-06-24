import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import './Admin.css'
const ManageComponent = (props) => {

    const deleteData=(id) => {
      console.log("ID ",id)
      fetch(`https://safe-anchorage-98101.herokuapp.com/deleteItem/${id}`,{
          method: 'DELETE'
      })
      .then(res=>res.json())
      .then(result=>{
          console.log("deleted ");
      })
      alert("Deleted");

      
    }
    return (
        <tr>
            <td>{props.products.name}</td>
            <td>{props.products.price}</td>
            <td>{props.products.quantity}</td>
            <td><button>Edit</button><button onClick={()=>deleteData(props.products._id)}>Delete </button> 
            </td>
        </tr>
    );
};

export default ManageComponent;