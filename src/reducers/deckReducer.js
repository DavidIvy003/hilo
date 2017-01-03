const newGame = (state, id) => {
  return Object.assign({}, {
    id
  })
}

const deckReducer = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_DECK':
      console.log('NEW_DECK from deckReducer', action.deckId, state, newGame(state, action.deckId))
      return newGame(state, action.deckId)
    default:
      console.log('Default value from deckReducer')
      return state;
  }
}

export default deckReducer;
