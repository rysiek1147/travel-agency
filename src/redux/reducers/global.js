import * as types from '../types/global';
// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case types.SET_MULTIPLE_STATES: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}