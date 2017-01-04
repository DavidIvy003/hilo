const newGame = (state, id) => {
  return Object.assign({}, {
    id,
    card: {}
  })
}

const drawCard = (state, card) => {
  let newState = Object.assign({}, state)
  newState.card = {}
  newState.card.value = card.value
  newState.card.image = card.image
  newState.card = card
  return newState
}

const deckReducer = (state = {card: {}}, action) => {
  switch (action.type) {
    case 'NEW_DECK':
      console.log('NEW_DECK from deckReducer', action.deckId, state, newGame(state, action.deckId))
      return newGame(state, action.deckId)
    case 'DRAW_CARD':
      console.log('DRAW_CARD from deckReducer', action)
      return drawCard(state, action.card)
    default:
      console.log('Default value from deckReducer')
      return state;
  }
}

export default deckReducer;
