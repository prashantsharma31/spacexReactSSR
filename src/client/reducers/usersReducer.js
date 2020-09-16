import { FETCH_MISSIONS } from '../actions/index';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;

    default:
      return state;
  }
};
