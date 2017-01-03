import { createStore, compose } from 'redux'

// import the root reducer
import rootReducer from './reducers/index'

// create an object for the default data
const defaultState = {
  deckId: '',
  text: ''
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers)

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
