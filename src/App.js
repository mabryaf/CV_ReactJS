import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftPanel from './Components/leftpanel';
import RightPanel from './Components/rightpanel';

class App extends Component {
  render() {
    return (
      <div className = "App">
      <LeftPanel />
      <RightPanel />
      </div>
    );
  }
}

export default App;
