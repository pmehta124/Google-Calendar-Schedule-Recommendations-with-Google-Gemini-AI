import React, { useState } from 'react';

const SchedulePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSchedule = () => {
    // Add your scheduling logic here based on the input
    // For demonstration purposes, let's just echo the input
    setOutputValue(`Scheduled: ${inputValue}`);
  };

  return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px', textAlign: 'center' }}>
      <h1>Schedule Page</h1>
      
      <label>
        Enter your schedule:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      
      <br />
      
      <button onClick={handleSchedule}>Schedule</button>

      <div style={{ marginTop: '20px' }}>
        <strong>Output:</strong> {outputValue}
      </div>
    </div>
  );
}

export default SchedulePage;
