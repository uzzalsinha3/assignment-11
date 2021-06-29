
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const [scrolled, setScrolled] = useState(false);

    const scrollHandler = () => {
        window.scrollTo(500, 0);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        })
    }, []);

    return (
        <footer id="dk-footer" className="dk-footer">
            <Container>
                <Row>
                    <Col md={12} lg={4}>
             
                    </Col>
                    <Col md={12} lg={8}>
                        <Row>
                            <Col md={6}>
                                <div className="contact-us">
                                    <div className="contact-icon">
                                     
                                    </div>
                                    <div className="contact-info">
                                        <h3>Rajshahi-6203</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="contact-us contact-us-last">
                                    <div className="contact-icon">
                                    </div>
                                    <div className="contact-info">
                                        <h3>Call Us</h3>
                                        <p>+88 122558455458</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} style={{float:'left'}}>
                                <div className="footer-widget footer-left-widget">
                                    <div className="section-heading">
                                        <h3>Useful Links</h3>
                                        <span className="animate-border border-black"></span>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="/" >About us</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Projects</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Our Team</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link to="/">Contact us</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Testimonials</Link>
                                        </li>
                                        <li>
                                            <Link to="/" >Faq</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="copyright">
                <Container>
                    <Row>
                        <Col md={6} className="order-2 order-md-1">
                            <span>Copyright © {new Date().getFullYear()}, All Rights Reserved Uzz@l Tailer</span>
                        </Col>
                        <Col md={6} className="order-1 order-md-2">
                            <div className="copyright-menu">
                                <ul>
                                    <li>
                                        <Link to="/" >Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Terms</Link>
                                    </li>
                                    <li>
                                        <Link to="/" >Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/" >Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="back-to-top">
                <Button variant="dark" onClick={scrollHandler} title="Back to Top" className={scrolled ? "d-block" : "d-none"}>
                </Button>
            </div>
        </footer>
    );
};

export default Footer;