const newGame = (state, id) => {
  return Object.assign({}, {
    id
  })
}

const drawCard = (state, action) => {
  let newState = Object.assign({}, state)
  let card = {}
  card.value = action.card.value
  card.image = action.card.image
  newState.card = card
  return newState
}

const deckReducer = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_DECK':
      console.log('NEW_DECK from deckReducer', action.deckId, state, newGame(state, action.deckId))
      return newGame(state, action.deckId)
    case 'DRAW_CARD':
      console.log('DRAW_CARD from deckReducer', action)
      return state
    default:
      console.log('Default value from deckReducer')
      return state;
  }
}

export default deckReducer;
