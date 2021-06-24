import axios from 'axios';
import React, { useState } from 'react';
import './Admin.css';

const AddProduct = () => {
    
    const [imgUrl,setImgUrl] = useState(null);
    const AddProductFormSubmit = (e) => {
        console.log("form submitted");
        console.log("asas ",e.target["itemName"].value)
        const eventdata={
            name: e.target["itemName"].value,
            quantity: e.target["itemQuantity"].value,
            price: e.target["price"].value,
            img :imgUrl
        };
       
        const url = `https://safe-anchorage-98101.herokuapp.com/addEvent`;
         fetch(url,{
             method: "POST",
             headers:{
                 'content-type': 'application/json'
             },
             body:JSON.stringify(eventdata)
         }).then(res=> console.log('server ',res))

        console.log("event ",eventdata);
        alert("Data added successfully");
        
         e.preventDefault();
    }

    const handleImage=(e)=>{
        
        const imageData = new FormData();
        console.log("imgg ",e.target.files[0])
        imageData.set('key', 'ee03dff96098bb3abf86cdf3bab71576');
        imageData.append('image',e.target.files[0]);
        console.log(imageData)
        axios.post('https://api.imgbb.com/1/upload', imageData).then(function (response) {
            setImgUrl(response.data.data.display_url);
        }).catch(function (err) {
            console.log(err);
        })
    }

    return (
        <div>
            <form onSubmit={AddProductFormSubmit} className="addForm">
                <h2>Add New Product</h2>
                <label>Item Name: </label><br/><input type="text" name="itemName" /><br />
                <label>Quantity/Weight: </label><br /><input type="number" name="itemQuantity"/><br />
                <label>Price: </label><br /><input type="number" name="price"/><br />
                <label>Upload A Photo </label><br />
                <input type="file" onChange={handleImage}/><br />
                <input type="submit" value="Upload File" />
            </form>
        </div>
    );
};

export default AddProduct;