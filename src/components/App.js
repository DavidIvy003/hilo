import React, { Component } from 'react'
import '../styles/App.css'
import Deck from './Deck'
import Controller from './Controller'
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
      </div>
    )
  }
}

export default App
