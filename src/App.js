import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "semantic-ui-react";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button to="/home">To homepage</Button>
      </header>
    </div>
  );
}

export default App;
