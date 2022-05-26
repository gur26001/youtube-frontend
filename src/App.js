import {Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Routes/Homepage';
import Uploadvideo from './Routes/Uploadvideopage';
import Videopage from './Routes/Videopage';


function App() {
  return (
    
    <div className="App">
        <header className="App-header">
            <Navbar/>
        </header>
      <Routes>
        <Route path='/'  element={<Homepage/>}  />
        <Route path='/uploadvideo' element={<Uploadvideo/>} />
        <Route path='/video/123' element={<Videopage/>} />
      </Routes>
    </div>
  );
}

export default App;
