import logo from './logo.svg';
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Admin from './Components/Home/Admin/Admin';
import AdminReview from './Components/Home/AdminReview/AdminReview';
import Orders from './Orders/Orders';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
      {/* <h5 className="bg-warning">Name of Signed in User:{loggedInUser.name}</h5> */}
      
    <Router>
      <Header/>

      <Switch>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route path="/order">
          <Orders/>
        </Route>
        <Route path="/adminReview">
          <AdminReview/>
        </Route>
        <PrivateRoute path="/admin">
          <Admin/>
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/booking/:Name"> 
          <Booking/>
        </PrivateRoute>
      </Switch>
  </Router>
  </UserContext.Provider>
   
  );
}

export default App;
