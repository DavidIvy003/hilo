export const newDeck = (deckId) => {
  return {
    type: 'NEW_DECK',
    text: deckId
  }
}
