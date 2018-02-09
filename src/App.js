import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = 'Heading';
    const mockUserObj = {
      name: 'foo',
      lastName: 'bar'
    };
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <p>{mockUserObj.name}</p>
        <p>{mockUserObj.lastName}</p>
      </div>
    );
  }
}

export default App;
