export const newDeck = (deckId) => {
  return {
    type: 'NEW_DECK',
    deckId: deckId
  }
}

export const createDeck = () => {
  return function (dispatch) {

    return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then(function(data) {
        dispatch(newDeck(data.deck_id))
      })

  }
}
