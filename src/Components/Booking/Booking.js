import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminReview from '../Home/AdminReview/AdminReview';
import Payment from '../Payment/Payment';

const Booking = () => {
  const { Name} = useParams();
  const checkoutStyle = {border:'1rem solid tomato', margin:'1rem', padding:'1rem', width:'15rem', height:'20rem', marginLeft:'35rem' };
    return (
      <div>
        <div style={checkoutStyle}>
          <h1 className="left">
          Name
          </h1>
          <span>{Name} </span>              
          <h1>
            Quantity
          </h1>
          <span>1</span>
          <h1>Price</h1>
          <span> 65</span>
          <br/>  <br/>  <br/><br/>  <br/>
          <span style = {{border:'1rem solid tomato'}}>Pay here</span> 

          <br/>  <br/>       
          <Payment></Payment>
          </div>
          <Link className="nav-link" to="/adminReview"><h5 style={{float:"left", border:"2rem solid cyan"}}>AdminReview</h5></Link><br/>  <br/>
          
        
       
      </div>
        
    );
};

export default Booking;