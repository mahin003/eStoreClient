import React, { useEffect, useState } from 'react';
import HomeComponent from './HomeComponent';
import './HomeDesign.css'
const Home = () => {
    const [events,setEvents]= useState([]);
 useEffect(()=>{
  fetch('https://safe-anchorage-98101.herokuapp.com/events')
  .then(res=> res.json())
  .then(data=> setEvents(data))
    },[])
    return (
        <div className="HomeElement">
            {
                events.map(product=><HomeComponent products={product}></HomeComponent>)
            }
        </div>
    );
};

export default Home;