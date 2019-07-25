import initialState from '../constants/initialState';
import { CREATE, REMOVE } from '../constants/actions';

const loansLentReducer = ( state = initialState.loans, action ) => {
  switch (action.type) {
    case CREATE:
      console.log(action.payload)
      return [ action.payload , ...state ]
    case REMOVE:
    // find by id and remove
      return state.remove(action.payload)
    default:
      return state
  }
}

export default loansLentReducer;
