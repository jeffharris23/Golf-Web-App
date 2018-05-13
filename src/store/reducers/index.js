import { UPDATE_PLAYERS } from "../actions/players";

const initialState = {
  players: [
    {},
    {},
    {},
    {},
  ],
  playersList: [
    {
      id: 'jg',
      name: 'James Grassie'
    },
    {
      id: 'jh',
      name: 'Jeff Harris'
    },
    {
      id: 'sj',
      name: 'Scotty Jackson'
    },
    {
      id: 'rk',
      name: 'Ryan Kornelson'
    },
    {
      id: 'bc',
      name: 'Brent Carlin'
    },                    
    {
      id: 'ar',
      name: 'Alex Reid'
    },          
  ],
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PLAYERS:
          return { ...state, players: action.payload };
        default:
          return state;
    }
};
export default rootReducer;