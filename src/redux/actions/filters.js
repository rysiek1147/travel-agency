import * as types from '../types/filters';
// action creators
export const changeSearchPhrase = payload => ({ payload, type: types.CHANGE_PHRASE });
// TODO - add other action creators
export const addTag = payload => ({ payload, type: types.ADD_TAG });
export const removeTag = payload => ({ payload, type: types.REMOVE_TAG });
export const changeDuration = payload => ({payload, type: types.CHANGE_DURATION});