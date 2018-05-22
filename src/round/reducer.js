import { UPDATE_ROUND } from "./actions";

const initialState = {
  round: {
      id: null,
      datetime: null,
      completed: false,
      progress: null
  },


};
const roundReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ROUND:
          return { ...state, round: action.payload };
        default:
          return state;
    }
};
export default roundReducer;