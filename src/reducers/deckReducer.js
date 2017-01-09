const newGame = (state, id) => {
  return Object.assign({}, {
    id,
    currentCard: {},
    faceUpPile: []
  })
}

const drawCard = (state, card) => {
  let newState = Object.assign({}, state)
  newState.previousCard = state.currentCard
  newState.currentCard = {}
  newState.currentCard.value = card.value
  newState.currentCard.image = card.image
  newState.faceUpPile.push(card.value)
  return newState
}

const clearFaceUpStack = (state, card) => {
  let newState = Object.assign({}, state)
  newState.faceUpPile = [card]
  return newState
}

const deckReducer = (state = {currentCard: {}, faceUpPile: []}, action) => {
  switch (action.type) {
    case 'NEW_DECK':
      console.log('NEW_DECK from deckReducer', action.deckId, state, newGame(state, action.deckId))
      return newGame(state, action.deckId)
    case 'DRAW_CARD':
      console.log('DRAW_CARD from deckReducer', action)
      return drawCard(state, action.card)
    case 'INCORRECT_GUESS':
      console.log('CORRECT_GUESS from deckReducer', action)
      return clearFaceUpStack(state, action.newCard)
    default:
      console.log('Default value from deckReducer')
      return state;
  }
}

export default deckReducer;
