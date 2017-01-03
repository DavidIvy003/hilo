import React, { Component } from 'react'
import '../styles/App.css'
import Deck from './Deck'

class App extends Component {
  componentDidMount() {
    console.log('fetch deck');
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      })
  }

  render() {
    return (
      <div className="App">
        <Deck />
      </div>
    )
  }
}

export default App
