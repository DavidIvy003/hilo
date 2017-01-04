const gameReducer = (state = {currentCard: {}}, action) => {
  switch (action.type) {
    case 'GUESS':
      // console.log('NEW_DECK from deckReducer', action.deckId, state, newGame(state, action.deckId))
      console.log('GUESS', action)
      return state
    default:
      console.log('Default value from controllerReducer')
      return state;
  }
}

export default gameReducer;
