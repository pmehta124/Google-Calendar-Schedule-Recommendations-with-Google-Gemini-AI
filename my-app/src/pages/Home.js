import React from 'react';
import { Link } from 'react-router-dom';
import lotusImage from '/Users/namijain/VSCodeProjects/ReactWeb/my-app/my-app/src/assets/lotus.png'

const Home = () => {
  return (
    <div style={{ backgroundColor: 'pink', padding: '20px', textAlign: 'center' }}>
      <img src={lotusImage} alt="Lotus" style={{ width: '100px', height: '100px' }} />
      <h1 style={{ color: 'green' }}>Hello, welcome to Wellness AI!</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Link to="/memepage">
          <button style={{ marginRight: '10px' }}>Meme Generator</button>
        </Link>
        <Link to="/schedule">
          <button>Schedule Wellness!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

