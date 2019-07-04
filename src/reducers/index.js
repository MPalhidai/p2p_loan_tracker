import { combineReducers } from 'redux'
import taken from './loansTakenReducer';
import lent from './loansLentReducer';

const reducer = combineReducers({
  taken: taken,
  lent: lent
})

export default reducer;
