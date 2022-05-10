import React, { useLayoutEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <NavBar />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
