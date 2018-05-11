import { ADD_SKILL, UPDATE_USER } from "../actions";

const initialState = {
  user: {
      name: "",
      email: "",
  },
  skills: []
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SKILL:
          return { ...state, skills: [...state.skills, action.payload] };
        case UPDATE_USER:
          return { ...state, user: action.payload };          
        default:
          return state;
    }
};
export default rootReducer;