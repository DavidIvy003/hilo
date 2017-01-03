import React, { Component } from 'react';

class Deck extends Component {
  componentDidMount() {
    console.log('fetch deck');
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then((response) => {
        console.log(response)
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hello World React JS, Redux, and create-react-app</h2>
        </div>
        <p className="App-intro">
          Hello, {this.props.text}
          {' '}
        </p>
      </div>
    );
  }
}

export default Deck;
