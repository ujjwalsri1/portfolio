import React from 'react';
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <html>
    <Navbar/>
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Skills" element={<Skills/>} />  
      <Route exact path="/Contact" element={<Contact/>} />
      
      </Routes>
    </Router>
    
    
    
    </html>
  );
}

export default App;
