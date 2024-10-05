import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import TestRender from './pages/TestRender';
import SystemList from './pages/SystemList';
import Educational from './pages/Educational';
import SystemDetails from './pages/SystemDetails';
import QuizList from './pages/QuizList';
import QuizPage from './pages/Quiz';
import Hologram from './pages/Hologram';
import ContactUs from './pages/ContactUs';
import Resources from './pages/Resources';


const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: 'white' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/test" element={<TestRender />} />
          <Route path="/system-list" element={<SystemList />} />
          <Route path="/educational" element={<Educational />} />
          <Route path="/system-details" element={<SystemDetails />} />
          <Route path="/quiz-list" element={<QuizList />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/hologram" element={<Hologram />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
