import React from 'react';
import './index.css'
import Navbar from './components/navbar/Navbar';

function App(props) {
  return (
       <header id="header" className="header">
          <Navbar/>
      </header>
  );
}

export default App;   