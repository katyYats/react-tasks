import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';

const rootReducer = combineReducers({
  data: moviesReducer
});

export default rootReducer;
