import { UPDATE_PLAYERS } from "../actions/players";

const initialState = {
  players: {
    'jg' : {
      id: 'jg',
      name: 'James Grassie',
      customInput: false,
    },
    'jh': {
      id: 'jh',
      name: 'Jeff Harris',
      customInput: false,
    },
    'sj': {
      id: 'sj',
      name: 'Scotty Jackson',
      customInput: false,
    },
    'rk': {
      id: 'rk',
      name: 'Ryan Kornelson',
      customInput: false,
    },        
  },
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
const playersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PLAYERS:
          //map through array and transform to object
          let temp = {};
          action.payload.map((player)=>{
            temp[player.id] = {
              id: player.id,
              name: player.name,
              customInput: player.customInput,
            };
          })
          return { ...state, players: temp };
        default:
          return state;
    }
};
export default playersReducer;