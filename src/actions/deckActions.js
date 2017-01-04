const newDeckAction = (deckId) => ({
  type: 'NEW_DECK',
  deckId: deckId
})

const drawCardAction = (card) => ({
  type: 'DRAW_CARD',
  card: card
})

export const drawCard = (deckId) => {
  console.log('deckid', deckId)
  return function (dispatch) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then(response => response.json())
      .then(data => dispatch(drawCardAction(data.cards[0])))
  }
}

export const createDeck = () => {
  return function (dispatch) {

    return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => response.json())
      .then(data => {
        dispatch(drawCard(data.deck_id))
        dispatch(newDeckAction(data.deck_id))
      })
  }
}
