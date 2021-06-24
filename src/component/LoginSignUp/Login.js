import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faGoogle } from '@fortawesome/free-brands-svg-icons';
// import firebaseConfig from '.../firebase.config'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import './LogSign.css';


firebase.initializeApp(firebaseConfig);


const Login = () => {

    let loginhistory = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    
    const googleprovider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(googleprovider)
        .then((result) => {
            const user= result.user;
          console.log(user);
          const userEmail ={
              isSignedIn:true,
              email:user.email
          }
          setLoggedInUser(userEmail);
          loginhistory.replace(from);
          // ...
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
    }

    const handleSubmit = () => {
        console.log("Clicled");
    }
    return (
        <div className="FormWithGoogle" >
          
                <div className="authLink" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} className="icon"  size="2x" style={{"border":"2px solid red;"}}></FontAwesomeIcon> <label>Continue With Google</label><br /></div>
                
        </div>
    );
};

export default Login;