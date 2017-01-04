const newDeckAction = (deckId) => ({
  type: 'NEW_DECK',
  deckId: deckId
})

const drawCardAction = (card) => ({
  type: 'DRAW_CARD',
  card: card
})

const guessAction = (guess, newCard, lastCard) => ({
  type: 'GUESS',
  guess: guess,
  newCard: newCard,
  lastCard: lastCard
})

export const drawCard = (deckId, guess = 0, lastCard) => {
  console.log('drawCard', deckId, guess)
  return function (dispatch) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then(response => response.json())
      .then(data => {
        let card = data.cards[0]
        dispatch(drawCardAction(card))
        if (guess !== 0) {
          dispatch(guessAction(guess, card.value, lastCard))
        }
      })
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

export const guessHigher = (deckId, card) => drawCard(deckId, 1, card)
export const guessLower = (deckId, card) => drawCard(deckId, -1, card)
