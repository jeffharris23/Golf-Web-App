import { UPDATE_MATCH } from "./actions";

const initialState = {
  matches: [
    {
        id: 1,
        first: ['jh','jg'],
        second: ['sj','rk'],
        type: 'match',
        games: {
            front: [0],
            back: [0],
            overall: [0],
        }
    },
    {
        id: 2,
        first: ['jh'],
        second: ['sj'],
        type: 'match',
        games: {
            front: [0],
            back: [0],
            overall: [0],
        }        
    }, 
    {
        id:3,
        first: ['rk'],
        second: ['sj'],
        type: 'match',
        games: {
            front: [0],
            back: [0],
            overall: [0],
        }        
    },     
    {
        id:4,
        first: ['jg'],
        second: ['jh'],
        type: 'match',
        games: {
            front: [0],
            back: [0],
            overall: [0],
        }        
    },     
  ]
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