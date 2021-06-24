import React from 'react';
import { Link } from 'react-router-dom';
import "./HomeDesign.css"
const HomeComponent = (props) => {
    const CheckOut=()=>{
        // console.log("Clik ");
        
    }
    // 
    return (
        <div className="productContainer">
            <div className="productImg">
                <img src={props.products.img}/>
            </div>
            <div className="productInfo">
                <div className="productName"><p>Name: {props.products.name}</p></div>
                <div className="productEvent">
                <p>Price: {props.products.price}</p>
                <Link to={`/checkout/${props.products._id}`} ><button onClick={CheckOut}>Book</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default HomeComponent;