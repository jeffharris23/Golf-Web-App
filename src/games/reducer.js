import { UPDATE_GAMES } from "./actions";

const initialState = {
  games: [
    {
      first: ['jh','jg'],
      second: ['sj','rk'],
      type: 'match',
    },
    {
      first: ['jh'],
      second: ['sj'],
      type: 'match',
    }, 
    {
      first: ['rk'],
      second: ['sj'],
      type: 'match',
    },     
    {
      first: ['jg'],
      second: ['jh'],
      type: 'match',
    },     
  ]
};
const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_GAMES:
          return { ...state, games: action.payload };
        default:
          return state;
    }
};
export default gamesReducer;