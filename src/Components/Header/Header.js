import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <nav className="navbar navbar-expand navbar-light bg-light justify-content-center">
          <a className="navbar-brand" href="#">Uzz@l Tailor</a>
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/home"><h5>Home</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service"><h5>Services</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/testimonial"><h5>Testimonials</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/adminReview"><h5>Customer Review</h5></Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/login"><h5>Login</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking"><h5>Booking</h5></Link>
              </li>
            </ul>
          </nav>

        </div>
    );
};

export default Header;