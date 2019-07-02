import React from 'react';
import '../stylesheets/App.css';

import Header from './Header';
import Dashboard from './Dashboard';
import Footer from './Footer';
import LoansList from './LoansList'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <LoansList />
      <Footer />
    </div>
  );
}

export default App;
