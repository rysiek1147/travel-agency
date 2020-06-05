// action name creator
const reducerName = 'global';
const createActionName = name => `app/${reducerName}/${name}`;
// action types
export const SET_MULTIPLE_STATES = createActionName('SET_MULTIPLE_STATES');