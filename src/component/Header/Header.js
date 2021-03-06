import React, { useContext } from 'react';
// import { Navbar, NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <div className="logo">
                <p>E STORE</p>
            </div>
            <nav className="nav">
                <Link to="/home"  style={{textDecoration:"none"}} >Home</Link>
                <Link to="/order"  style={{textDecoration:"none"}} >Order</Link>
                <Link to="/admin/Addproduct"  style={{textDecoration:"none"}} >Admin</Link>
                <Link to="/deals"  style={{textDecoration:"none"}} >Deals</Link>
                {loggedInUser.isSignedIn ? <button onClick={()=>setLoggedInUser({})}><Link to="/">{loggedInUser.email}</Link></button> : <button><Link to="/login">Log In</Link></button>}

            </nav>
        </div>
    );
};

export default Header;