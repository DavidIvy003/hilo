import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as deckActions from '../actions/deckActions';
import * as controllerActions from '../actions/controllerActions';

const Controller = props => (
  <div>
    <button onClick={() => props.guessHigher(props.deckId, props.card, props.faceUpPile)}>
      Higher
    </button>
    <button onClick={() => props.guessLower(props.deckId, props.card, props.faceUpPile)}>
      Lower
    </button>
    <button onClick={() => props.passTurn()}
            disabled={props.currentGuesses < 3}>
      Pass Turn
    </button>
  </div>
)

const mapStateToProps = (state) => {
  console.log('map to state to props, state.deckId: ', state);
  return {
    deckId: state.deck.id,
    card: state.deck.currentCard.value,
    faceUpPile: state.deck.faceUpPile,
    currentGuesses: state.game.currentGuesses,
  }
}

console.log('passTurn', controllerActions.passTurn())

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...controllerActions, ...deckActions}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controller);
