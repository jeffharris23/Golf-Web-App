// import { createSelector } from 'reselect';

export const getPlayersByArray = (state) => Object.keys(state.players.players).map((key,index) => {
    return {
      id: state.players.players[key].id,
      name: state.players.players[key].name,
      hdcp: state.players.players[key].hdcp,
      customInput: state.players.players[key].customInput,
    };
  });