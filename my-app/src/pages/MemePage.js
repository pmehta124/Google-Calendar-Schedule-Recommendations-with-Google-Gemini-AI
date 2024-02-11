import React, { useState } from 'react';

const MemePage = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeImage, setMemeImage] = useState(null);

  const handleInputChange = (event, setTextFunction) => {
    setTextFunction(event.target.value);
  };

  const generateMeme = () => {
    // Add your meme generation logic here
    // For demonstration purposes, let's assume there's a meme API that returns an image URL
    const apiUrl = `https://api.example.com/meme?top=${encodeURIComponent(topText)}&bottom=${encodeURIComponent(bottomText)}`;
    
    // Fetch meme image
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setMemeImage(data.url))
      .catch(error => console.error('Error fetching meme:', error));
  };

  return (
    <div style={{ backgroundColor: 'lightyellow', padding: '20px', textAlign: 'center' }}>
      <h1>Meme Generator</h1>
      
      <label>
        Top Text:
        <input type="text" value={topText} onChange={(e) => handleInputChange(e, setTopText)} />
      </label>
      
      <br />
      
      <label>
        Bottom Text:
        <input type="text" value={bottomText} onChange={(e) => handleInputChange(e, setBottomText)} />
      </label>
      
      <br />

      <button onClick={generateMeme}>Generate Meme</button>

      {memeImage && (
        <div style={{ marginTop: '20px' }}>
          <img src={memeImage} alt="Generated Meme" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default MemePage;
