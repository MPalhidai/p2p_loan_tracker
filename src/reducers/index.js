import { combineReducers } from 'redux'
import takenState from './loansTakenReducer';
import lentState from './loansLentReducer';

const rootReducer = combineReducers({
  takenState,
  lentState
})

export default rootReducer;
