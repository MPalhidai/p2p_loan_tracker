import {
  CREATE,
  REMOVE
} from '../constants/actions';

export const createLoan = loan => {
  return {
    type: CREATE,
    payload: loan
  }
}

export const removeLoan = id => {
  return {
    type: REMOVE,
    payload: id
  }
}
