import * as types from '../types/order';
// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case types.SET_OPTION:
      return {
        ...state,
        options: {
          ...state.options,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}