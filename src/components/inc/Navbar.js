import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <div className="navbar-dark bg-dark shadow">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">

                                <Link to="/" className="navbar-brand text-warning">Let's GO</Link>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link to="/home" className="nav-link active text-warning">Home</Link>
                                       </li>
                                        <li className="nav-item">
                                            <Link to="/about" className="nav-link active text-warning">About Us</Link>
                                       </li>
                                       <li className="nav-item">
                                            <Link to="/contact" className="nav-link active text-warning">Contact Us</Link>
                                       </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;