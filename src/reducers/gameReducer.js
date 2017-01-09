const DEFAULT_STATE = {
  currentPlayer: 0,
  currentGuesses: 0,
  scores: { 0: 0, 1: 0 }
}

const getScores = (oldScores, player, points) => {
  let scores = Object.assign({}, oldScores)
  scores[player] = oldScores[player] + points
  return scores
}

const incorrectGuess = (state, points) => {
  let newState = Object.assign({}, state)
  newState.scores = getScores(state.scores, state.currentPlayer, points)
  newState.currentGuesses = 0
  return newState
}

const correctGuess = (state) => {
  let newState = Object.assign({}, state)
  newState.currentGuesses = state.currentGuesses + 1
  return newState
}

const passTurn = (state) => {
  let newState = Object.assign({}, state)
  newState.currentPlayer = state.currentPlayer === 0 ? 1 : 0
  newState.currentGuesses = 0
  return newState
}

const gameReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return DEFAULT_STATE
    case 'INCORRECT_GUESS':
      console.log('GUESS', JSON.stringify(action))
      return incorrectGuess(state, action.points)
    case 'CORRECT_GUESS':
      console.log('GUESS', JSON.stringify(action))
      return correctGuess(state)
    case 'PASS_TURN':
      console.log('PASS_TURN', JSON.stringify(action))
      return passTurn(state)
    default:
      console.log('Default value from controllerReducer')
      return state;
  }
}

export default gameReducer;
