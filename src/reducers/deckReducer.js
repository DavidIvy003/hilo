const newGame = (state, deckId) => {
  return Object.assign({}, {
    deckId
  })
}

const deckReducer = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_DECK':
      console.log('NEW_DECK from deckReducer')
      return newGame(state, action.deckId)
    default:
      console.log('Default value from deckReducer')
      return state;
  }
}

export default deckReducer;
