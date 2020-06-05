import * as types from '../types/filters';
// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case types.CHANGE_PHRASE:
      return {
        ...state,
        searchPhrase: action.payload,
      };
    case types.ADD_TAG:
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    case types.REMOVE_TAG:
      return {
        ...state,
        tags: [...state.tags.filter(tag => tag !== action.payload)],
      };
    case types.CHANGE_DURATION:
      return {
        ...state,
        ...state.duration[action.payload.type] = Number(action.payload.value),
      };
    // TODO - handle other action types
    default:
      return state;
  }
}