const DEFAULT_STATE = {
  id: '',
  currentCard: {},
  previousCard: {},
  faceUpPile: []
}

const newDeck = (state, id) => {
  let newState = Object.assign({}, DEFAULT_STATE)
  newState.id = id
  return newState
}

const drawCard = (state, card, remaining) => {
  let newState = Object.assign({}, state)
  newState.remaining = remaining
  newState.previousCard = state.currentCard
  newState.currentCard = {}
  newState.currentCard.value = card.value
  newState.currentCard.image = card.image
  newState.faceUpPile = [...state.faceUpPile, card.value]
  return newState
}

const clearFaceUpStack = (state, card) => {
  let newState = Object.assign({}, state)
  newState.faceUpPile = [card]
  return newState
}

const deckReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      console.log('NEW_GAME from deckReducer', action.deckId, state, newDeck(state, action.deckId))
      return newDeck(state, action.deckId)
    case 'DRAW_CARD':
      console.log('DRAW_CARD from deckReducer', action)
      return drawCard(state, action.card, action.remaining)
    case 'INCORRECT_GUESS':
      console.log('CORRECT_GUESS from deckReducer', action)
      return clearFaceUpStack(state, action.newCard)
    default:
      console.log('Default value from deckReducer')
      return state;
  }
}

export default deckReducer;
