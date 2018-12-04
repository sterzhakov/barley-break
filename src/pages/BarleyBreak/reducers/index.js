import { combineReducers } from 'redux';
import nodes from './nodes';
import stepsCount from './stepsCount';

export default combineReducers({
  nodes,
  stepsCount,
});
