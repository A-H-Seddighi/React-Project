import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './../app.css';
import companyLogo from './../images/brand.jpg';
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top p-0" style={{ background: "#18181A", zIndex: "9999999" }}>
                <div className="container">
                    <a href="/"><img className="navbar-brand" src={companyLogo} alt="brand" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end p-0" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                        <div class="offcanvas-header" style={{ borderBottom: "2px solid #999999" }}>
                            <a href="/"><img src={companyLogo} alt="brand" /></a>
                            <button className="btn-close" style={{ color: "#fff", background: "transparent", border: "none", boxShadow: "none" }} type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">&#215;</button>
                        </div>
                        <div className="offcanvas-body p-0">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <Link className="nav-item pt-2 pb-2" exact to="/">
                                    <a className="nav-link">Home</a>
                                </Link>
                                <NavLink className="nav-item pt-2 pb-2" to="/services">
                                    <a className="nav-link">Services</a>
                                </NavLink>
                                <NavLink className="nav-item pt-2 pb-2" to="/products">
                                    <a className="nav-link">Products</a>
                                </NavLink>
                                {props.user ? (
                                    <>
                                        <NavLink className="nav-item pt-2 pb-2" to="/dashboard">
                                            <a className="nav-link">Dashboard</a>
                                        </NavLink>
                                        <NavLink className="nav-item pt-2 pb-2" to="/logout">
                                            <a className="nav-link">Logout</a>
                                        </NavLink>
                                    </>
                                ) : (null)}
                            </ul>
                            {props.user ? (null) : (
                                <Link to="/login"><button className="button my-2 py-2 mt-3 login-btn">Login</button></Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;