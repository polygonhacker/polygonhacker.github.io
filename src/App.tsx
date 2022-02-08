import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

const App: React.FC = () => {
  return (
    <div className="App">
      <Intro />
      <About />
      <Projects />
      <NavBar />
    </div>
  );
}

export default App;
