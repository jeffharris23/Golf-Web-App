import { UPDATE_ROUND, UPDATE_PROGRESS } from "./actions";

const initialState = {
  round: {
      id: null,
      datetime: null,
      completed: false,
      progress: 1
  },


};
const roundReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ROUND:
          return { ...state, round: action.payload };
        case UPDATE_PROGRESS:
          let progress = {...state};

          const val = parseInt(action.payload);
          if(val > progress.round.progress) {
            progress.round.progress = val;
          }
          return { ...state, progress };          
        default:
          return state;
    }
};
export default roundReducer;