import React from 'react';
import { Link } from 'react-router-dom';
import lotusImage from './lotus.png';
const Home = () => {
  const containerStyle = {
    background: 'radial-gradient(circle, #AAFAA2, #FFC0CB)',
    padding: '20px',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-50px', // Adjusted to move all elements up
  };
  const imageStyle = {
    width: '100px',
    height: '100px',
  };
  const headingStyle = {
    color: 'green',
  };
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };
  const buttonStyle = {
    marginRight: '10px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '15px 30px', // Adjusted for larger button text
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px', // Adjusted for larger button text
  };
  return (
    <div style={containerStyle}>
      <img src={lotusImage} alt="Lotus" style={imageStyle} />
      <h1 style={headingStyle}>Hello, welcome to Wellness AI!</h1>
      <div style={buttonContainerStyle}>
        <Link to="/memepage">
          <button style={buttonStyle}>Get a Song Recommendation</button>
        </Link>
        <Link to="/schedule">
          <button style={buttonStyle}>Connect your Calendar</button>
        </Link>
      </div>
    </div>
  );
};
export default Home;