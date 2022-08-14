import React from 'react';
import HeaderBackground from "./../images/dashboard.jpg";
import './../pages.css';

const Dashboard = (props) => {
  const token = localStorage.getItem('token');
  return (
    <>
      <img src={HeaderBackground} alt="services" style={{ overflowY: "hidden", objectFit: "cover", width: "100%", height: "100%", position: "fixed", zIndex: "-1" }} />
      <div className="overlay">
        {token ? (
          <p className="header-text" style={{ alignSelf: "center" }}>DASHBOARD</p>
        ) : (
          <>
            <p className="header-text" style={{ alignSelf: "center" }}>You must login</p>
            <button className="button" style={{ padding: "10px 50px" }} onClick={() => { props.history.replace('/login') }}>Login</button>
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;