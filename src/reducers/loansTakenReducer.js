import initialState from '../constants/initialState';
import { CREATE, REMOVE } from '../constants/actions';

const loansTakenReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case CREATE:
      return {
        loansLent: state.currentUser.loansTaken.push(action.payload)
      };
    case REMOVE:
    // find by id and remove
      return {
        loansLent: state.currentUser.loansTaken.remove(action.payload)
      };
    default:
      return state;
  }
}

export default loansTakenReducer;
