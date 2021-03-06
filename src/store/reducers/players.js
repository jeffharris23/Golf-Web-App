import { UPDATE_PLAYERS, UPDATE_HDCPS } from "../actions/players";

const initialState = {
  players: {
    'jg' : {
      id: 'jg',
      name: 'James Grassie',
      customInput: false,
      hdcp: 2,
    },
    'jh': {
      id: 'jh',
      name: 'Jeff Harris',
      customInput: false,
      hdcp: 4,
    },
    'sj': {
      id: 'sj',
      name: 'Scotty Jackson',
      customInput: false,
      hdcp: 4,
    },
    'rk': {
      id: 'rk',
      name: 'Ryan Kornelson',
      customInput: false,
      hdcp: 8,
    },        
  },
  playersList: [
    {
      id: 'jg',
      name: 'James Grassie',
      hdcp: 2,
    },
    {
      id: 'jh',
      name: 'Jeff Harris',
      hdcp: 4,
    },
    {
      id: 'sj',
      name: 'Scotty Jackson',
      hdcp: 4,
    },
    {
      id: 'rk',
      name: 'Ryan Kornelson',
      hdcp: 8,
    },
    {
      id: 'bc',
      name: 'Brent Carlin',
      hdcp: 5,
    },                    
    {
      id: 'ar',
      name: 'Alex Reid',
      hdcp: 7,
    },          
  ],

};

function formatHdcp(hdcp) {

  if(hdcp === "") {
    return 0;
  } 
  return parseInt(hdcp);

}
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
              hdcp: formatHdcp(player.hdcp)
            };
          })
          return { ...state, players: temp };

        case UPDATE_HDCPS:
          let hdcps = {...state};

          hdcps.players[action.payload.id].hdcp = formatHdcp(action.payload.hdcp);
          return hdcps;          
        default:
          return state;
    }
};
export default playersReducer;