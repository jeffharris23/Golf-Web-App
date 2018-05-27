// import { createSelector } from 'reselect';

export const getScoresByArray = (state) => Object.keys(state.scores.scores).map((key,index) => {
    return {
        id: state.scores.scores[key].id,
        name: state.scores.scores[key].name,
        holes: {...state.scores.scores[key].holes},
        snips: state.scores.scores[key].snips,
        meta: {...state.scores.scores[key].meta}
    }
  });