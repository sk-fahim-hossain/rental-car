import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/"><Link style={{color: 'white',textDecoration:'none'}} to="/">Home</Link></a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="#" ><Link style={{color: 'white',textDecoration:'none'}} to="/experts">Experts</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><Link style={{color: 'white',textDecoration:'none'}} to="/services">Service</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><Link style={{color: 'white',textDecoration:'none'}} to="/login">Login</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;