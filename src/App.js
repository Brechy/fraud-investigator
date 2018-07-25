import React, { Component } from 'react';
import './App.css';
import HelloWorldButton from './components/HelloWorldButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorldButton />
      </div>
    );
  }
}

export default App;
