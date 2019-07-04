import initialState from '../constants/initialState';
import { CREATE, REMOVE } from '../constants/actions';

const loansTakenReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case CREATE:
      return {
        loansTaken: state.loansTaken.push(action.payload)
      };
    case REMOVE:
    // find by id and remove
      return {
        loansTaken: state.loansTaken.remove(action.payload)
      };
    default:
      return state;
  }
}

export default loansTakenReducer;
