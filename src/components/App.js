import React from 'react';
import logo from '../images/logo.svg';
import '../stylesheets/App.css';

import Header from './Header';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <img src={logo} className="App-logo" alt="logo" />
      <Dashboard />
    </div>
  );
}

export default App;
