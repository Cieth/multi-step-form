import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Card';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className='App'>
      <div className='Header'>
        <div className='Buttons'>
          <Navigation />
        </div>

        <Cards />
        <Nav />
      </div>
    </div>
  );
}

export default App;
