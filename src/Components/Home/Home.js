import React, { Component, useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router";
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';
import banner from '../../img.jpg';
import { UserContext } from '../../App';
import * as ReactBootStrap from 'react-bootstrap';



import Header from './Header/Header';
import Services from './Services/Services';

import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


const Home = () => {


    const [purchase, setPurchase] = useState([]);
    const [review, setReview] = useState([]);
    const history = useHistory();        
    const handleRide =() =>{
        history.push('/booking')
    }


    const [loggedInUser,setLoggedInUser] = useContext(UserContext);


    useEffect(()=>{
        fetch('https://warm-eyrie-98471.herokuapp.com/items')
        .then(res => res.json())
        .then(data => setPurchase(data))
    }, [])

    useEffect(()=>{
        fetch('https://warm-eyrie-98471.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])

    return (
        <div>
            {<ReactBootStrap.Spinner animation="border" />}
             <Header></Header>
            {/* <Services></Services> */}



            <div style={{ backgroundImage: `url(${banner})`, width:'100rem', height:'30rem' }}>
                <h1 style={{textAlign:'center',color:'white'}}>Services</h1>
                <ul>
                    {purchase.map(purchasing => <Service purchasing={purchasing}></Service>)}
                </ul>
            </div>



            
            {/* <Testimonials></Testimonials> */}

            <div style={{ backgroundImage: `url(${banner})`, width:'100rem', height:'30rem' }}>
                <h1 style={{textAlign:'center',color:'white'}}>Testimonials</h1>
                <ul>
                    {review.map(reviewing => <Testimonials reviewing={reviewing}></Testimonials>)}
                </ul>
            </div>

            <Contact></Contact>
            <Footer></Footer>

            

            
        </div>
        
    );
};

export default Home;