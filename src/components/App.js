import React from 'react';
import '../stylesheets/App.css';

import Header from './Header';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Header />

      <Dashboard />
    </div>
  );
}

export default App;
