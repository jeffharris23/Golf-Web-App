import { UPDATE_COURSE } from "./actions";

const initialState = {
  selectedCourse: {
      id: 1,
      name: 'Quail',
      holes: {
        1: 4,
        2: 5,
        3: 4,
        4: 3,
        5: 4,
        6: 5,
        7: 3,
        8: 4,
        9: 4,
        10: 4,
        11: 3,
        12: 5,
        13: 4,
        14: 4,
        15: 3,
        16: 4,
        17: 5,
        18: 4,
      },
      meta: {
        front: 36,
        back: 36,
        total: 72,
      }  
  },
  
  courseList: [
    {
      id: 1,
      name: 'Quail',
      holes: {
        1: 4,
        2: 5,
        3: 4,
        4: 3,
        5: 4,
        6: 5,
        7: 3,
        8: 4,
        9: 4,
        10: 4,
        11: 3,
        12: 5,
        13: 4,
        14: 4,
        15: 3,
        16: 4,
        17: 5,
        18: 4,
      },
      meta: {
        front: 36,
        back: 36,
        total: 72,
      }      
      
    },
    {
      id: 2,
      name: 'Bear',
      holes: {
        1: 4,
        2: 4,
        3: 4,
        4: 3,
        5: 4,
        6: 3,
        7: 5,
        8: 4,
        9: 5,
        10: 4,
        11: 3,
        12: 4,
        13: 5,
        14: 3,
        15: 4,
        16: 4,
        17: 4,
        18: 5,
      },
      meta: {
        front: 36,
        back: 36,
        total: 72,
      }       
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