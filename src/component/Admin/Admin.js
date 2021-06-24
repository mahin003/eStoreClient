import { faPlusSquare, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Route } from 'react-router-dom';
import AddProduct from './AddProduct';
import "./Admin.css";
import Manage from './Manage';

const Admin = () => {
    return (
        <div className="AdminSection">
            <div className="adminNav"><div>
                <FontAwesomeIcon icon={faPlusSquare} className="icon" size="2x"></FontAwesomeIcon><Link to="/admin/Addproduct"> Add Product </Link></div>
               
               <div> <FontAwesomeIcon icon={faTasks} className="icon" size="2x"></FontAwesomeIcon><Link to="/admin/manage">Manage Product</Link></div> 
            </div>
            <div className="adminComponents">
                <Route path="/admin/manage">
                    <Manage></Manage>
                </Route>
                <Route path="/admin/Addproduct">
                    <AddProduct></AddProduct>
                </Route>

            </div>
        </div>
    );
};

export default Admin;