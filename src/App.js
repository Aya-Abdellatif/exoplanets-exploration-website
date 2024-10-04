import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import TestRender from './pages/TestRender';
import SystemList from './pages/SystemList';


const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: 'black' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/test" element={<TestRender />} />
          <Route path="/system-list" element={<SystemList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
