import React from 'react';
import '../stylesheets/App.css';

import Header from './Header';
import Dashboard from './Dashboard';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Dashboard />

      <Footer />
    </div>
  );
}

export default App;
