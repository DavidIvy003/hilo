const getScores = (oldScores, player, points) => {
  let scores = Object.assign({}, oldScores)
  scores[player] = oldScores[player] + points
  return scores
}

const incorrectGuess = (state, points) => {
  let newState = Object.assign({}, state)
  newState.scores = getScores(state.scores, state.currentPlayer, points)
  console.log('incorrectGuess', state, newState)
  return newState
}

const correctGuess = (state) => {
  let newState = Object.assign({}, state)
  newState.currentPlayer = state.currentPlayer === 0 ? 1 : 0
  console.log('correctGuess', state, newState)
  return newState
}

const gameReducer = (state = { currentPlayer: 0, scores: { 0: 0, 1: 0 }}, action) => {
  switch (action.type) {
    case 'INCORRECT_GUESS':
      console.log('GUESS', JSON.stringify(action))
      return incorrectGuess(state, action.points)
    case 'CORRECT_GUESS':
      console.log('GUESS', JSON.stringify(action))
      return correctGuess(state)
    default:
      console.log('Default value from controllerReducer')
      return state;
  }
}

export default gameReducer;
