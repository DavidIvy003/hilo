import React, { Component } from 'react';

class Deck extends Component {

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
