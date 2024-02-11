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
      <form action= "{{ url_for('test')}}" method="post">
        <label>
          What time do you wake up (ex: 8AM):
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
      </form>

      <br></br>

      {/* <label>
        What time do you sleep (ex: 10PM):
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
       */}
      <br />
      
      <button onClick={handleSchedule}>Schedule</button>

      <div style={{ marginTop: '20px' }}>
        <strong>Output:</strong> {outputValue}
      </div>
    </div>
  );
}

export default SchedulePage;
