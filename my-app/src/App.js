import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SchedulePage from './pages/Schedule';
import MemePage from './pages/MemePage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route index element={<Home />} />
         <Route path ="/Home" element = {<Home />} />
         <Route path ="/schedule" element = {<SchedulePage />} />
         <Route path ="/memepage" element = {<MemePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
