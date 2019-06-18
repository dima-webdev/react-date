import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Toggle from './Toggle';
import NumberList from './NumberList';

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock /> {/* Реакт вызывает конструктор компонента Clock */}
        <Toggle />
        <NumberList numbers={numbers} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
