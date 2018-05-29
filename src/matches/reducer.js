import { UPDATE_MATCH } from "./actions";

const initialState = {
  matches: {
    1: {
        id: 1,
        first: {
            'jh' : {
                name: 'Jeff Harris',
                hdcp: 4,
            },
            'jg': {
                name: 'James Grassie',
                hdcp: 2,
            },
        },
        second: {
            'sj' : {
                name: 'Scott Jackson',
                hdcp: 4,
            },
            'rk': {
                name: 'Ryan Kornelson',
                hdcp: 8,
            },
        },
        type: 'match',
        payout: 0,
        games: {
            front: {
                1: [0,1,-1,2],
                2: [0,2,1],
                3: [0],
                4: [0],
                5: [0],
                6: [0],
                7: [0],
                8: [0],
                9: [0],
            },
            back: {
                10: [0],
                11: [0],
                12: [0],
                13: [0],
                14: [0],
                15: [0],
                16: [0],
                17: [0],
                18: [0],
            },
            overall: {
                1: [0],
                2: [0],
                3: [0],
                4: [0],
                5: [0],
                6: [0],
                7: [0],
                8: [0],
                9: [0],
                10: [0],
                11: [0],
                12: [0],
                13: [0],
                14: [0],
                15: [0],
                16: [0],
                17: [0],
                18: [0],                
            }
        }
    },
}
};
const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MATCH:
            return state;
        default:
            return state;
    }
};
export default gamesReducer;