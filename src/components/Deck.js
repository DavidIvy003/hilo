import React from 'react';
import { connect } from 'react-redux'

const Deck = props => (
  <img src={props.card.image} />
)

const mapStateToProps = (state) => {
  console.log('map to state to props, state.deckId: ', state);
  return {
    deckId: state.deck.id,
    card: state.deck.currentCard
  }
};

export default connect(mapStateToProps)(Deck);
