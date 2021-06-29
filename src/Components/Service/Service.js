import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AdminReview from '../../Components/Home/AdminReview/AdminReview';

import { animated, useSpring } from 'react-spring';
import './Service.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { UserContext } from '../../App';


const Service = (props) => {
    const { Name, Price, image, id } = props.purchasing;
    const serviceStyle = {border:'1rem solid cyan', margin:'1rem', padding:'1rem', width:'30rem', height:'20rem', float: 'left', marginLeft:'1rem'  };
    const imageStyle = {width:'100%', height:'50%'};
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (



                <div className="card mx-auto" style={serviceStyle} class="animation">
                    <img src={image} style={imageStyle} className="card-img-top"  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{Name}</h5>
                        <p>Price: {Price}</p>
                        <Link to={`/booking/${Name}`}>
                        <button className="btn btn-primary">Order</button>

                       {/* <AdminReview></AdminReview> */}

                    </Link>
                    </div>
                </div>

    );
};

export default Service;