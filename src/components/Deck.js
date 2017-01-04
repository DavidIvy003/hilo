import React from 'react';
import { connect } from 'react-redux'

const Deck = props => (
  <div className="App">
    <div className="App-header">
      <h1>Higher or Lower?</h1>
    </div>
    <p className="App-intro">
      <img src={props.card.image} />
    </p>
  </div>
)

const mapStateToProps = (state) => {
  console.log('map to state to props, state.deckId: ', state);
  return {
    deckId: state.deck.id,
    card: state.deck.card
  }
};

export default connect(mapStateToProps)(Deck);
