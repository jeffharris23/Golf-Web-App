import { UPDATE_ROUND, UPDATE_PROGRESS } from "./actions";

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
          case UPDATE_PROGRESS:
          let progress = {...state};
          progress.round.progress = parseInt(action.payload.hole);
          return { ...state, progress };          
        default:
          return state;
    }
};
export default roundReducer;