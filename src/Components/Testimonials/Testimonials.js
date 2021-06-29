import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { UserContext } from '../../App';
import './Testimonials.css';

const Testimonials = (props) => {
    const { Name, Price, image, id } = props.reviewing;
    const serviceStyle = {border:'1rem solid cyan', margin:'1rem', padding:'1rem', width:'30rem', height:'20rem', float: 'left', marginLeft:'1rem' };
    const imageStyle = {width:'100%', height:'60%'};
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);


    return (
        <div className="card mx-auto" style={serviceStyle} class="testimonial">
        <img src={image} style={imageStyle} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center">{Name}</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, facilis.</p>
            <Link to={`/booking/${Name}`}>
            {/* <button className="btn btn-primary">Buy</button> */}
        </Link>
        </div>
    </div>
    );
};

export default Testimonials;