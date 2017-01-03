import React, { Component } from 'react'
import '../styles/App.css'
import Deck from './Deck'

class App extends Component {
  onChangeHandler(event) {
    console.log('from onChangeHandler App.js')
    this.props.onChange(event.target.value)
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
