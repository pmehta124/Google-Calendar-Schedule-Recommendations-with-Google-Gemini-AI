import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MemePage = () => {
  const [topText, setTopText] = useState('');
  const [memeImage, setMemeImage] = useState(null);

  const handleInputChange = (event) => {
    setTopText(event.target.value);
  };

  const generateMeme = () => {
    // Add your meme generation logic here
    // For demonstration purposes, let's assume there's a meme API that returns an image URL
    const apiUrl = `https://api.example.com/meme?top=${encodeURIComponent(topText)}`;
    
    // Fetch meme image
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setMemeImage(data.url))
      .catch(error => console.error('Error fetching meme:', error));
  };

  const buttonStyle = {
    background: '#000080', // Dark Blue
    color: 'white',
    borderRadius: '5px', // Rounded corners
    cursor: 'pointer',
    padding: '10px 20px', // Decreased button padding
    fontSize: '1rem', // Button font size
    border: 'none',
  };

  const inputStyle = {
    borderRadius: '8px', // Rounded corners
    padding: '8px', // Input padding
    fontSize: '16px', // Input font size
    boxShadow: 'none', // Remove shadows
  };

  return (
    <div style={{ background: 'radial-gradient(circle, #BFD9EB, #A1F1A1)', padding: '20px', textAlign: 'center', minHeight: '100vh', boxSizing: 'border-box' }}>
      <h1 style={{ color: '#000080' }}>Song Recommendation</h1>

      <div style={{ marginBottom: '10px' }}>
        <Link to="/">
          <button style={buttonStyle}>Home</button>
        </Link>
      </div>
      
      <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', color: '#000080' }}>
        <span style={{ marginRight: '10px' }}>How are you feeling today?</span>
        <input type="text" value={topText} onChange={handleInputChange} style={inputStyle} />
      </label>

      <div style={{ marginBottom: '15px' }}>
        <button onClick={generateMeme} style={buttonStyle}>Display Song</button>
      </div>

      {memeImage && (
        <div style={{ marginTop: '20px' }}>
          <img src={memeImage} alt="Generated Meme" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default MemePage;