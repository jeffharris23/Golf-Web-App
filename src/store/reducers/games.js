import { UPDATE_GAMES } from "../actions/games";

const initialState = {
  games: [
    {
      first: [],
      second: []
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