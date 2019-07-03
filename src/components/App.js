import React from 'react';
import { Provider } from 'react-redux';
import '../stylesheets/App.css';

import Header from './Header';
import Dashboard from './Dashboard';
import Footer from './Footer';
import LoansList from './LoansList'

const App = () => {
  return (
    <Provider store = { store }>
      <div className="App">
        <Header />
        <Dashboard />
        <LoansList />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
