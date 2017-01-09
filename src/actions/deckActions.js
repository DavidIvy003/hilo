const CARD_ORDER = ['ACE', 'KING', 'QUEEN', 'JACK', '10', '9', '8', '7', '6', '5', '4', '3', '2']

const compareCards = (newCard, oldCard) => {
  return CARD_ORDER.indexOf(newCard) > CARD_ORDER.indexOf(oldCard) ? -1 : 1
}

const newGameAction = (deckId) => ({
  type: 'NEW_GAME',
  deckId: deckId
})

const drawCardAction = (card, remaining) => ({
  type: 'DRAW_CARD',
  card: card,
  remaining: remaining
})

const guessAction = (guess, newCard, lastCard, faceUpPile) => {
  let actionType = compareCards(newCard, lastCard) === guess ? 'CORRECT_GUESS' : 'INCORRECT_GUESS'
  console.log('actionType', actionType)
  return {
    type: actionType,
    points: faceUpPile.length - 1,
    newCard: newCard
  }
}

export const drawCard = (deckId, guess = 0, lastCard, faceUpPile) => {
  console.log('drawCard', deckId, guess)
  return function (dispatch) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then(response => response.json())
      .then(data => {
        let card = data.cards[0]
        dispatch(drawCardAction(card, data.remaining))
        if (guess !== 0) {
          dispatch(guessAction(guess, card.value, lastCard, faceUpPile))
        }
      })
  }
}

export const newGame = () => {
  return function (dispatch) {

    return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => response.json())
      .then(data => {
        dispatch(drawCard(data.deck_id))
        dispatch(newGameAction(data.deck_id))
      })
  }
}

export const guessHigher = (deckId, card, faceUpPile) => drawCard(deckId, 1, card, faceUpPile)
export const guessLower = (deckId, card, faceUpPile) => drawCard(deckId, -1, card, faceUpPile)
