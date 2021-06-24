import './App.css';
import Header from './component/Header/Header';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Login from './component/LoginSignUp/Login';
import Deals from './component/LoginSignUp/Deals';
import Admin from './component/Admin/Admin';
import Checkout from './component/Home/Checkout';
import Thanks from './component/Home/Thanks';
import Order from './component/Order/Order';
import PrivateRoute from './PrivateRoute';


export const UserContext = createContext();
function App() {
  
  const [loggedInUser, setloggedInUser] = useState({
    isSignedIn:false,
    email:''
  });
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setloggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>
      
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/deals">
            <Deals></Deals>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
         <Route path="/thanks">
               <Thanks></Thanks>
         </Route>
          <Route path="/">
            <Home></Home>
          </Route>
          
          
        </Switch>
     

      </Router>
      </UserContext.Provider> 
    </div>
  );
}

export default App;
