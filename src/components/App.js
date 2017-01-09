import React, { Component } from 'react'
import '../styles/App.css'
import Deck from './Deck'
import Controller from './Controller'
import Score from './Score'
import { createDeck } from '../actions/deckActions'

class App extends Component {
  componentDidMount() {
    console.log('props', this.props)
    this.props.dispatch(createDeck())
  }

  render() {
    return (
      <div className="App">
        <Deck />
        <Controller />
        <Score />
      </div>
    )
  }
}

export default App
