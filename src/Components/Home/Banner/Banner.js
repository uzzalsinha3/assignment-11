import React from 'react';
import banner from '../../../images/antique-machine.jpg'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <main className="row">
            <div style={{margin:"3rem",}}>
                <h1>Welcome to Uzz@l Tailor</h1>
                <h5>Fashion According to Your Wish</h5>
            <Button className="btn-main">
                            Appointment
                        </Button>
                {/* <img src={banner} alt="" className="img-fluid" /> */}
            </div>
            
        </main>
    );
};

export default Banner;