import {
  CREATE,
  REMOVE
} from '../constants/actions';

export const createLoan = loan => {
  return {
    type: CREATE,
    loan: loan
  }
}
