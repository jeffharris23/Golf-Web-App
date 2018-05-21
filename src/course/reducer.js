import { UPDATE_COURSE } from "./actions";

const initialState = {
  selectedCourse: {
      id: '',
      name: '',
  },
  
  courseList: [
    {
      id: 1,
      name: 'Quail'
    },
    {
      id: 2,
      name: 'Bear'
    }    
  ]

};
const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COURSE:
          return { ...state, selectedCourse: action.payload };
        default:
          return state;
    }
};
export default courseReducer;