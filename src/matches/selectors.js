export const getMatchesByArray = (state) => Object.keys(state.matches.matches).map((key,index) => {
    return {
        id: state.matches.matches[key].id,
        first: [...state.matches.matches[key].first],
        second: [...state.matches.matches[key].second],
        type: state.matches.matches[key].type,
        payout: state.matches.matches[key].payout,
        games: {...state.matches.matches[key].games}
    }
  });