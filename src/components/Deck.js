import React, { Component } from 'react';
import { connect } from 'react-redux'

class Deck extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hello World React JS, Redux, and create-react-app</h2>
        </div>
        <p className="App-intro">
          Hello, {this.props.deckId}
          {' '}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('map to state to props, state.deckId: ', state);
  return {
    deckId: state.deck.id
  }
};

export default connect(mapStateToProps)(Deck);
