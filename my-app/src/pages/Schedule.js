import React, { useState, useEffect } from 'react';

const SchedulePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // const sendData = (asych) => {
  //   console.log("CHECK HERE")
  //   const todo = { outputValue };
  //   const response = await fetch("/data", {
  //   method: "POST",
  //   headers: {
  //   'Content-Type' : 'application/json'
  //   },
  //   body: JSON.stringify(todo)
  //   })
  //   .then(response => {
  //     if (response.ok){
  //       console.log("it worked")
  //     }})

  // }

  // const handleSchedule = () => {
  //   // Add your scheduling logic here based on the input
  //   // For demonstration purposes, let's just echo the input
  //   setOutputValue(`Scheduled: ${inputValue}`);
  //   sendData()
    

    // fetch(f"/data?value={outputValue}").then((res) => res.json().then(())

    // fetch(f"/data?value={outputValue}").then((res) =>
    //         res.json().then((data) => {
    //             // Setting a data from api
    //             setdata({
    //                 name: data.Name,
    //                 age: data.Age,
    //                 date: data.Date,
    //                 programming: data.programming,
    //             });
    //         })
    //     );
    // }

  // };

  const handleAddTodo = async () => { 
    const todo = { inputValue }; 
    const response = await fetch("/data", {
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
  

//   function handleAddTodo(){


//     if (query != "") {
//         axios.post('http://localhost:5000/api/query', inputValue)
//             .then(function(response){
//                 console.log(response);
//        //Perform action based on response
//         })
//         .catch(function(error){
//             console.log(error);
//        //Perform action based on error
//         });
//     } else {
//         alert("The search query cannot be empty")
//     }
// }




  return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px', textAlign: 'center' }}>
      <h1>Schedule Page</h1>
      <form action="http://localhost:5000/">
        <label>
          What time do you wake up (ex: 8AM):
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
      
      <br></br>

      {/* <label>
        What time do you sleep (ex: 10PM):
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
       */}
      <br />
      
      {/* <button 
      type="submit" 
      value="Add Todo"
      onClick={async () => {
      const todo = { content };
      const response = await fetch("/add_todo", {
      method: "POST",
      headers: {
      'Content-Type' : 'application/json'
      },
      body: JSON.stringify(todo)
      })
      if (response.ok){
      console.log("it worked")
      }>
      </button> */}
        <button
          type="submit" // Changed type to button
          onClick={handleAddTodo} // Changed to call handleAddTodo function
        >
          Submit
        </button>

      </form>

      <div style={{ marginTop: '20px' }}>
        <strong>Output:</strong> {outputValue}
      </div>
    </div>
  );
}

export default SchedulePage;
