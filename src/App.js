import React, { Component } from 'react';
import './App.css';
import MenuBar from './components/MenuBar'
import Events from './components/Events'

class App extends Component {

  state = {
    events: []
  }

  componentDidMount = async () => {
    const eventsJSON = await fetch('/events.json')
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
        <a className="flex-container">
        <div className="cards">
          <Events events={this.state.events} />
        </div>
        </a>
      </div>
    );
  }
}

export default App;
