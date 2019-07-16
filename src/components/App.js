import React from 'react';
import '../stylesheets/App.css';

import Header from './Header';
import Routes from './Routes';
import Footer from './Footer';



const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
