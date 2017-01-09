import reducer from '../../src/reducers/gameReducer'

describe('deck reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      currentPlayer: 0,
      correctGuesses: 0,
      scores: { 0: 0, 1: 0 }
    })
  })

  it('should handle NEW_GAME', () => {
    expect(
      reducer({}, {
        type: 'NEW_GAME',
        deckId: 'DECKID'
      })
    ).toEqual({
      currentPlayer: 0,
      correctGuesses: 0,
      scores: { 0: 0, 1: 0 }
    })
  })

  it('should handle INCORRECT_GUESS', () => {
    expect(
      reducer({
        currentPlayer: 0,
        correctGuesses: 0,
        scores: { 0: 0, 1: 0 }
      }, {
        type: 'INCORRECT_GUESS',
        points: 2
      })
    ).toEqual({
      currentPlayer: 0,
      correctGuesses: 0,
      scores: { 0: 2, 1: 0 }
    })
  })

  it('should handle CORRECT_GUESS', () => {
    expect(
      reducer({
        currentPlayer: 0,
        correctGuesses: 0,
        scores: { 0: 2, 1: 0 }
      }, {
        type: 'CORRECT_GUESS'
      })
    ).toEqual({
      currentPlayer: 0,
      correctGuesses: 1,
      scores: { 0: 2, 1: 0 }
    })
  })

  it('should handle PASS_TURN', () => {
    expect(
      reducer({
        currentPlayer: 0,
        correctGuesses: 3,
        scores: { 0: 2, 1: 0 }
      }, {
        type: 'PASS_TURN'
      })
    ).toEqual({
      currentPlayer: 1,
      correctGuesses: 0,
      scores: { 0: 2, 1: 0 }
    })
  })
})