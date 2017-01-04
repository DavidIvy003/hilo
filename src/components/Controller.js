import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as controllerActions from '../actions/deckActions';

const Controller = props => (
  <div>
    <button onClick={() => props.guessHigher(props.deckId, props.card)}>
      Higher
    </button>
    <button onClick={() => props.guessLower(props.deckId, props.card)}>
      Lower
    </button>
  </div>
)

const mapStateToProps = (state) => {
  console.log('map to state to props, state.deckId: ', state);
  return {
    deckId: state.deck.id,
    card: state.deck.currentCard.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(controllerActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controller);
