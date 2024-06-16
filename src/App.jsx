// src/App.js
import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
