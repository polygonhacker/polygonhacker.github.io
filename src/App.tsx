import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Intro />
      <Intro />
      <Intro />
    </div>
  );
}

export default App;
