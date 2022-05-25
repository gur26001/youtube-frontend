import { useState } from 'react';
import {Routes,Route } from 'react-router-dom';
import './App.css';
import Homepage from './Routes/Homepage';
import channelLogo from './Components/media/avatar.png';
import Uploadvideo from './Routes/Uploadvideopage';


function App() {

  
  
  
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Homepage />}  />
        <Route path='/uploadvideo' element={<Uploadvideo channel_icon={channelLogo} />} />
      </Routes>
    </div>
  );
}

export default App;
