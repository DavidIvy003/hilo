import { connect } from 'react-redux';
import App from './App';
import { bindActionCreators } from 'redux';
import * as deckAction from '../actions/deckActions';

const mapStateToProps = (state) => {
  console.log('map to state to props, state.text: ' + state.text);
  return {
    text: state.text
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('map to dispatch to props');
  return bindActionCreators(deckAction, dispatch);
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer;
