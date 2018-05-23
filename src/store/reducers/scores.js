import { UPDATE_SCORE } from "../actions/scores";

const initialState = {
  scores: [
    {
        id: 'jg',
        name: 'James Grassie',
        holes: {
            1: 4,
            2: 5,
            3: 4,
            4: null,
            5: null,
            6: null,
            7: null,
            8: null,
            9: null,
            10: null,
            11: null,
            12: null,
            13: null,
            14: null,
            15: null,
            16: null,
            17: null,
            18: null,
        },
        snips: 0,
        meta: {
            front: null,
            back: null,
            total: null,
        } 
    },
    {
      id: 'jh',
      name: 'Jeff Harris',
      snips: 0,
      holes: {
            1: 5,
            2: 4,
            3: 4,
            4: null,
            5: null,
            6: null,
            7: null,
            8: null,
            9: null,
            10: null,
            11: null,
            12: null,
            13: null,
            14: null,
            15: null,
            16: null,
            17: null,
            18: null,
        },
        meta: {
            front: null,
            back: null,
            total: null,
        }
    },
    {
      id: 'sj',
      name: 'Scotty Jackson',
      snips: 0,
      holes: {
        1: 3,
        2: 5,
        3: 6,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null,
        11: null,
        12: null,
        13: null,
        14: null,
        15: null,
        16: null,
        17: null,
        18: null,
    },
    meta: {
        front: null,
        back: null,
        total: null,
    }
    },
    {
      id: 'rk',
      name: 'Ryan Kornelson',
      snips: 0,
      holes: {
        1: 6,
        2: 6,
        3: 5,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null,
        11: null,
        12: null,
        13: null,
        14: null,
        15: null,
        16: null,
        17: null,
        18: null,
    },
    meta: {
        front: null,
        back: null,
        total: null,
    }
    },        
  ],

};
const scoresReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SCORE:
            const temp = [...state.scores];
            temp.map((player,i) => {
                if(player.id === action.payload.id) {
                    temp[i].holes[action.payload.hole] = action.payload.score;
                }
            })
            return { ...state, scores: temp };
       
        default:
          return state;
    }
};
export default scoresReducer;