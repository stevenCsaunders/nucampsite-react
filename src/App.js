import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/" >
              Nucamp
            </NavbarBrand>
          </div>
        </Navbar>
      </header>
    </div>
  );
}

export default App;
