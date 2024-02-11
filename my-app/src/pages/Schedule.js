import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Schedule = () => {
  const [activities, setActivities] = useState('');
  const [wakeUpTime, setWakeUpTime] = useState('');
  const [bedTime, setBedTime] = useState('');
  const handleInputChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const buttonStyle = {
    background: '#4B0082',
    color: 'white',
    borderRadius: '8px', // Rounded corners
    padding: '12px 24px', // Slightly smaller padding
    fontSize: '16px', // Slightly smaller font size
    cursor: 'pointer',
    boxShadow: 'none', // Remove shadow
    border: 'none',
  };

  const handleAddTodo = () => { 
    const todo = { inputValue }; 
    const response = fetch("/data", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
    if (response.ok) {
      console.log("it worked");
    }
  };
  

  return (
    <div style={{ background: 'radial-gradient(circle, #D8C9FF, #ADD8E6)', padding: '20px', textAlign: 'center', minHeight: '100vh', boxSizing: 'border-box' }}>
      <h1 style={{ color: '#4B0082' }}>Schedule Page</h1>
            <form action="http://localhost:5000/">

      <div style={{ marginBottom: '10px' }}>
        <Link to="/">
          <button style={{ ...buttonStyle, marginRight: '10px' }}>Home</button>
        </Link>
      </div>
      <div style={{ marginBottom: '10px', color: '#4B0082' }}>
        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ marginRight: '10px' }}>What are some activities you want on your wellness breaks?</span>
          <input type="text" value={activities} onChange={(e) => handleInputChange(e, setActivities)} style={{ width: '300px' }} />
        </label>
      </div>
      <div style={{ marginBottom: '10px', color: '#4B0082' }}>
        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ marginRight: '10px', border: 'none'}}>What time do you wake up?</span>
          <input type="text" value={wakeUpTime} onChange={(e) => handleInputChange(e, setWakeUpTime)} />
        </label>
      </div>
      <div style={{ marginBottom: '10px', color: '#4B0082' }}>
        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ marginRight: '10px' }}>What time do you go to bed?</span>
          <input type="text" value={bedTime} onChange={(e) => handleInputChange(e, setBedTime)} />
        </label>
      </div>
      <button  style={{ ...buttonStyle, marginRight: '10px' }}
          type="submit" // Changed type to button
          onClick={handleAddTodo} // Changed to call handleAddTodo function
        >
          Submit
        </button>

      </form>
          </div>
  );
}
export default Schedule;