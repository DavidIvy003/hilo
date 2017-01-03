import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import HelloReducer from './reducers/helloReducer'
import AppContainer from './components/AppContainer';
import './styles/index.css';

console.log('from index.js');
let store = createStore(HelloReducer, {text: 'Initial value from createStore'});

ReactDOM.render(
 <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
