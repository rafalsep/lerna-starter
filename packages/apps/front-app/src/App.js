import React, { Component } from 'react';
import logo from './logo.svg';
import Button from '@gmdev/button';
import Counter from '@gmdev/counter';
import Header from '@gmdev/header';
import Airport from '@gmdev/airport';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            <Button><span>aa</span></Button>
            <Counter />
            <Header />
            <Airport className="test" code="qwerty" name="ff" />
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
