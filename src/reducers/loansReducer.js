import initialState from '../constants/initialState';
import { CREATE, REMOVE } from '../constants/actions';

const loansLentReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case CREATE:
      return {
        loans: state.loans.push(action.payload)
      };
    case REMOVE:
    // find by id and remove
      return {
        loans: state.loans.remove(action.payload)
      };
    default:
      return state;
  }
}

export default loansLentReducer;
