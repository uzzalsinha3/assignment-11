import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth"; 
import firebaseConfig from "./firebase.config";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


firebase.initializeApp(firebaseConfig); 

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () =>{
    firebase.auth()
    .signInWithPopup(provider)
    .then(res => {
        const {displayName, email} =res.user;
        const signedInUser = {name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);

      console.log(res);
    })

  }
  const handleBlur = (e)=>{
    let isFormValid =true;
      if(e.target.name ==='email'){
       isFormValid = /\S+@\S+\.\S+/.test(e.target.value);

      }
      if(e.target.name ==='password'){
        const isPasswordValid = e.target.value > 6;
        const passwordHasNumber = /\d{1}/.test(e.target.value);
        isFormValid = isPasswordValid && passwordHasNumber;
      }
      if(isFormValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo); 
      }

  }

  const handleSubmit = ()=>{
    history.replace(from);

  }
    return (
        <div className="mb-3 mx-auto">

          <h1 className="text-center">Authentication Form</h1>
          <form onSubmit = {handleSubmit} className="text-center">
            <input type="text" name="name" onBlur={handleBlur} placeholder="Your Name" required/>
            <br/>
            <input type="text" name="email" onBlur={handleBlur} placeholder="Your Mail Address" required/>
            <br/>
            <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
            <br/>
            <input type="submit" value="Submit"/>
          </form>
          
          <br/>
          <h5 className="text-center">or</h5>

          <div className="App">
            <button className="btn bg-success" onClick = {handleSignIn}>Sign in with Google</button>
      
          </div>
        </div>
    );
};

export default Login;