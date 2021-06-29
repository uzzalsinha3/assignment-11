import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link ms-5" to="/home"><h5>Home</h5></Link>
                       </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="#">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link ms-5" to="/login"><h5>Login</h5></Link>
                       </li>
                       <li className="nav-item">
                        <Link className="nav-link ms-5" to="/admin"><h5>Admin</h5></Link>
                       </li>
                    </ul>

                </div>
        </nav>
    );
};

export default Navbar;