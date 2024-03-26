// src/components/App.js

import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Footer from './Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Menu and Navbar */}
      <div className="flex-1 flex">
        <Menu />
        <div className="flex-1 flex flex-col justify-center">
          <Navbar />
          {/* Main Content */}
          <div className="w-5/6 mx-auto">
            <MainContent />
          </div>
        </div>
        <Menu />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
