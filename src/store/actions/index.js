export const ADD_SKILL = "ADD_SKILL";
export const UPDATE_USER = "UPDATE_USER";
export const addSkill = payload => ({ type: ADD_SKILL, payload: payload });
export const updateUser = payload => ({ type: UPDATE_USER, payload: payload });