import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>GameStoreBG</Link>
                    <Link className="btn btn-outline-dark" to="/adduser">Register</Link>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;