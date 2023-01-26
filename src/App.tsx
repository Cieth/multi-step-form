import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Card';
function App() {
  return (
    <div className='App'>
      <div className='Header'>
        <Cards
          title='Personal info'
          description='Please provide your name, email address and password '
        />
      </div>

      <Nav />
    </div>
  );
}

export default App;
