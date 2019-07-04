import initialState from '../constants/initialState';
import { CREATE, REMOVE } from '../constants/actions';

const loansLentReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case CREATE:
      return {
        loansLent: state.currentUser.loansLent.push(action.payload)
      };
    case REMOVE:
    // find by id and remove
      return {
        loansLent: state.currentUser.loansLent.remove(action.payload)
      };
    default:
      return state;
  }
}

export default loansLentReducer;
