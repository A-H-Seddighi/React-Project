import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './../app.css';
import cardImage1 from './../images/img-9.jpg';
import cardImage2 from './../images/img-2.jpg';
import cardImage3 from './../images/img-3.jpg';
import cardImage4 from './../images/img-4.jpg';
import cardImage5 from './../images/img-8.jpg';

class Cards extends Component {
    render() {
        return (
            <>
                <div className="justify-content-center container" style={{ marginTop: "85px", padding: "0px 5%" }}>
                    <b><center><h3 className="cards-title">Check out these EPIC Destinations!</h3></center></b>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <a href="/"><div className="card p-0">
                                <img className="m-0 p-0 card-image" src={cardImage1} alt="card image" />
                                <div className='p-3' style={{ background: "#fff", border: "none", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", zIndex: "9999" }}>
                                    <p style={{ fontWeight: "bold", fontSize: "14pt" }}>Explore the hidden waterfall deep inside the Amazon Jungle</p>
                                </div>
                            </div></a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/"><div className="card p-0">
                                <img className="m-0 p-0 card-image" src={cardImage2} alt="card image" />
                                <div className='p-3' style={{ background: "#fff", border: "none", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", zIndex: "9999" }}>
                                    <p style={{ fontWeight: "bold", fontSize: "14pt" }}>Travel through the Islands of Bali in a Private Cruise</p>
                                </div>
                            </div></a>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-4">
                            <a href="/"><div className="card p-0">
                                <img className="m-0 p-0 card-image" src={cardImage3} alt="card image" />
                                <div className='p-3' style={{ background: "#fff", border: "none", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", zIndex: "9999" }}>
                                    <p style={{ fontWeight: "bold", fontSize: "14pt" }}>Set Sail in the Atlantic Ocean visiting Uncharted Waters</p>
                                </div>
                            </div></a>
                        </div>
                        <div className="col-lg-4">
                            <a href="/"><div className="card p-0">
                                <img className="m-0 p-0 card-image" src={cardImage4} alt="card image" />
                                <div className='p-3' style={{ background: "#fff", border: "none", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", zIndex: "9999" }}>
                                    <p style={{ fontWeight: "bold", fontSize: "14pt" }}>Experience Football on Top of the Himilayan Mountains</p>
                                </div>
                            </div></a>
                        </div>
                        <div className="col-lg-4">
                            <a href="/about"><div className="card p-0">
                                <img className="m-0 p-0 card-image" src={cardImage5} alt="card image" />
                                <div className='p-3' style={{ background: "#fff", border: "none", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", zIndex: "9999" }}>
                                    <p style={{ fontWeight: "bold", fontSize: "14pt" }}>Ride through the Sahara Desert on a guided camel tour</p>
                                </div>
                            </div></a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Cards;