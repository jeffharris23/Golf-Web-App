import { UPDATE_COURSE } from "./actions";

const initialState = {
  selectedCourse: {
      id: 1,
      name: 'Quail',
      logo: '/images/courses/1.svg',
      holes: {
        1: {
          par:4,
          hdcp: 17,
        },
        2: {
          par:5,
          hdcp: 9,
        },
        3: {
          par:4,
          hdcp: 11,
        },
        4: {
          par:3,
          hdcp: 13,
        },
        5: {
          par:4,
          hdcp: 15,
        },
        6: {
          par:5,
          hdcp: 5,
        },
        7: {
          par:3,
          hdcp: 7,
        },
        8: {
          par:4,
          hdcp: 1,
        },
        9: {
          par:4,
          hdcp: 3,
        },
        10: {
          par:4,
          hdcp: 6,
        },
        11: {
          par:3,
          hdcp: 18,
        },
        12: {
          par:5,
          hdcp: 14,
        },
        13: {
          par:4,
          hdcp: 12,
        },
        14: {
          par:4,
          hdcp: 8,
        },
        15: {
          par:3,
          hdcp: 16,
        },
        16: {
          par:4,
          hdcp: 10,
        },
        17: {
          par:5,
          hdcp: 2,
        },
        18: {
          par:4,
          hdcp: 4,
        },
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
      logo: '/images/courses/1.svg',
      holes: {
        1: {
          par:4,
          hdcp: 17,
        },
        2: {
          par:5,
          hdcp: 9,
        },
        3: {
          par:4,
          hdcp: 11,
        },
        4: {
          par:3,
          hdcp: 13,
        },
        5: {
          par:4,
          hdcp: 15,
        },
        6: {
          par:5,
          hdcp: 5,
        },
        7: {
          par:3,
          hdcp: 7,
        },
        8: {
          par:4,
          hdcp: 1,
        },
        9: {
          par:4,
          hdcp: 3,
        },
        10: {
          par:4,
          hdcp: 6,
        },
        11: {
          par:3,
          hdcp: 18,
        },
        12: {
          par:5,
          hdcp: 14,
        },
        13: {
          par:4,
          hdcp: 12,
        },
        14: {
          par:4,
          hdcp: 8,
        },
        15: {
          par:3,
          hdcp: 16,
        },
        16: {
          par:4,
          hdcp: 10,
        },
        17: {
          par:5,
          hdcp: 2,
        },
        18: {
          par:4,
          hdcp: 4,
        },
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
      logo: '/images/courses/2.svg',
      holes: {
        1: {
          par:4,
          hdcp: 11,
        },
        2: {
          par:4,
          hdcp: 5,
        },
        3: {
          par:4,
          hdcp: 3,
        },
        4: {
          par:3,
          hdcp: 13,
        },
        5: {
          par:4,
          hdcp: 9,
        },
        6: {
          par:3,
          hdcp: 17,
        },
        7: {
          par:5,
          hdcp: 1,
        },
        8: {
          par:4,
          hdcp: 15,
        },
        9: {
          par:5,
          hdcp: 7,
        },
        10: {
          par:4,
          hdcp: 2,
        },
        11: {
          par:3,
          hdcp: 18,
        },
        12: {
          par:4,
          hdcp: 14,
        },
        13: {
          par:5,
          hdcp: 10,
        },
        14: {
          par:3,
          hdcp: 16,
        },
        15: {
          par:5,
          hdcp: 12,
        },
        16: {
          par:4,
          hdcp: 6,
        },
        17: {
          par:4,
          hdcp: 4,
        },
        18: {
          par:5,
          hdcp: 8,
        },
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