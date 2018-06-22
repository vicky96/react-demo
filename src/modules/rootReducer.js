import { combineReducers } from 'redux-immutable';
import { reducer as user } from './User/duck';

export const rootReducer = combineReducers({
  user
})