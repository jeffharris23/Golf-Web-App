import { UPDATE_GAMES } from "./actions";

const initialState = {
  games: [
    {
      first: ['jh','jg'],
      second: ['sj','rk'],
      type: 'match',
    }   
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