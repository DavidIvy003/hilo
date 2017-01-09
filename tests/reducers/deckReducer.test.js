import reducer from '../../src/reducers/deckReducer'

describe('deck reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      id: '',
      remaining: 52,
      currentCard: {},
      previousCard: {},
      faceUpPile: []
    })
  })

  it('should handle NEW_GAME', () => {
    expect(
      reducer({}, {
        type: 'NEW_GAME',
        deckId: 'DECKID'
      })
    ).toEqual({
      id: 'DECKID',
      remaining: 52,
      currentCard: {},
      previousCard: {},
      faceUpPile: []
    })
  })

  it('should handle DRAW_CARD', () => {
    expect(
      reducer({
        id: 'DECKID',
        remaining: 52,
        currentCard: {},
        previousCard: {},
        faceUpPile: []
      }, {
        type: 'DRAW_CARD',
        card: { value: 'KING', image: 'test.png' },
        remaining: 51
      })
    ).toEqual({
      id: 'DECKID',
      remaining: 51,
      currentCard: {
        value: 'KING',
        image: 'test.png'
      },
      previousCard: {},
      faceUpPile: ['KING']
    })
  })

  it('should handle INCORRECT_GUESS', () => {
    expect(
      reducer({
        id: 'DECKID',
        remaining: 52,
        currentCard: { value: 'KING', image: 'test.png' },
        previousCard: {},
        faceUpPile: ['KING', '4', 'JACK']
      }, {
        type: 'INCORRECT_GUESS',
        newCard: { value: 'KING', image: 'test.png' }
      })
    ).toEqual({
      id: 'DECKID',
      remaining: 52,
      currentCard: {
        value: 'KING',
        image: 'test.png'
      },
      previousCard: {},
      faceUpPile: ['KING']
    })
  })
})