import React, { Component } from 'react'
import '../styles/App.css'
import Deck from './Deck'
import Controller from './Controller'
import Score from './Score'
import { newGame } from '../actions/deckActions'

class App extends Component {
  componentDidMount() {
    console.log('props', this.props)
    this.props.dispatch(newGame())
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Higher or Lower?</h1>
        </div>
        <div className="App-container">
          <div className="App-deck">
            <Deck />
          </div>
          <div className="App-controller">
            <Score />
            <Controller />
          </div>
        </div>
      </div>
    )
  }
}

export default App
