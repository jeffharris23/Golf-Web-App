import { UPDATE_ROUND, UPDATE_PROGRESS } from "./actions";

const initialState = {
      id: null,
      datetime: null,
      completed: false,
      progress: 0

};
const roundReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ROUND:
          return state;
        case UPDATE_PROGRESS:
          let temp = {...state};

          const val = parseInt(action.payload) - 1;
          if(val > temp.progress) {
            temp.progress = val;
          }
          return { ...state, progress: temp.progress };          
        default:
          return state;
    }
};
export default roundReducer;