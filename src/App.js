import React, { Component } from 'react';
import './App.css';
import MenuBar from './components/MenuBar'
import Events from './components/Events'

class App extends Component {

  state = {
    events: []
  }

  componentDidMount = async () => {
    const eventsJSON = await fetch('http://localhost:3000/events')
    console.log(eventsJSON, 'This is my array of events')
    let events = await eventsJSON.json()

    this.setState({events})

  }

  render() {
    return (
      <div className="App">
        <div className="menu">
          <MenuBar />
        </div>
        <div className="cards">
          <Events events={this.state.events} />
        </div>
      </div>
    );
  }
}

export default App;
