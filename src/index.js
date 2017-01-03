import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppContainer from './components/AppContainer';
import './styles/index.css';
import store from './store'

console.log('from index.js');

ReactDOM.render(
 <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
