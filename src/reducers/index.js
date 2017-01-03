import { combineReducers } from 'redux'

import deckReducer from './deckReducer'

const rootReducer = combineReducers({
  deck: deckReducer
})

export default rootReducer
