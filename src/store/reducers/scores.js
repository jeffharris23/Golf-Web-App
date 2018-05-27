import { UPDATE_SCORE, UPDATE_SNIPS } from '../actions/scores';

const initialState = {
  scores: {
    jg: {
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
        18: null
      },
      snips: 24,
      meta: {
        front: null,
        back: null,
        total: null
      }
    },
    jh: {
      id: 'jh',
      name: 'Jeff Harris',
      snips: 4,
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
        18: null
      },
      meta: {
        front: null,
        back: null,
        total: null
      }
    },
    sj: {
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
        18: null
      },
      meta: {
        front: null,
        back: null,
        total: null
      }
    },
    rk: {
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
        18: null
      },
      meta: {
        front: null,
        back: null,
        total: null
      }
    }
  }
};

//helper function to get user f9, b9, 18 totals
function updateTotals(scores) {
  let temp = {
    front: 0,
    back: 0,
    total: 0
  };

  let count = 1;
  for (var key in scores) {
    if (count < 10) {
      temp.front += scores[key];
    } else {
      temp.back += scores[key];
    }
    count++;
  }

  temp.total = temp.front + temp.back;

  return temp;
}
const scoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      const scores = {...state.scores};
      scores[action.payload.id].holes[action.payload.hole] = action.payload.score;
      const total = updateTotals(scores[action.payload.id].holes);
      scores[action.payload.id].meta = total;
      return { ...state, scores: scores };

    case UPDATE_SNIPS:
      const scores2 = {...state.scores};
      scores2[action.payload.id].snips = action.payload.snips;
      return { ...state, scores: scores2 };

    default:
      return state;
  }
};
export default scoresReducer;
