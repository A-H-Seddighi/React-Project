import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './../app.css';
import headerVideo from './../videos/video-1.mp4';

class Header extends Component {
    render() {
        return (
            <>
                <video style={{ width: "100%", height: "100%" }} autoPlay loop muted>
                    <source src={headerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay">
                    <p className="header-text title">ADVENTURE AWAITS</p>
                    <p className="header-text sup-title" style={{ fontSize: "17pt", fontWeight: "normal" }}>What Are You Waiting For?</p>
                    <div className="d-flex buttons">
                        <button className="button same-size my-2 mx-2" style={{ padding: "10px 30px", zIndex: "99999" }}>GET STARTED</button>
                        <button className="button my-2 mx-2" style={{ padding: "10px 30px", background: "#fafafa", color: "#000", zIndex: "99999" }}>WATCH TRAILER&nbsp;<svg style={{ fill: "#000" }} width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z" /></svg></button>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;