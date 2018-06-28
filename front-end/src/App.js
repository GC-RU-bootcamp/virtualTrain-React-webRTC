import React, { Component } from 'react';
import MainNavBar from './components/MainNavBar.js';
import Footer from './components/Footer.js';
import IndexContent from './components/IndexContent.js';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="flex flex-column vh-100 justify-between bg-near-white">
        <MainNavBar/>
        <IndexContent />
        <Footer/>
      </div>
    );
  }
}

export default App;
