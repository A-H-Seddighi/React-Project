import React, { Component } from 'react';
import HeaderBackground from "./../images/img-8.jpg";
import './../pages.css';

class App extends Component {
  render() {
    return (
      <>
          <img src={ HeaderBackground } alt="services" style={{ overflowY: "hidden", objectFit: "cover", width: "100%", height: "100%", position: "fixed", zIndex: "-1" }} />
          <div className="overlay">
              <p className="header-text" style={{ alignSelf: "center" }}>LIKE & SUBSCRIBE</p>
          </div>
      </>
    );
  }
}

export default App;