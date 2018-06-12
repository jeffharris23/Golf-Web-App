import { UPDATE_MATCHES, ADD_PRESS } from "./actions";

const initialState = {
  matches: {
    1: {
        id: 1,
        first: {
            'jh' : {
                name: 'Jeff Harris',
                hdcp: 0,
            },
        },
        second: {
            'jg': {
                name: 'James Grassie',
                hdcp: 0,
            },
        },
        type: 'match',
        payout: 0,
        games: {
            front: {
                1: [
                    {
                        id : 0,
                        score: 0,
                    }
                ],
                2: [
                    {
                        id : 0,
                        score: 0,
                    },
                    {
                        id : 'jh',
                        score: 0,
                    },  
                ],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
            },
            back: {
                10: [
                    {
                        id : 0,
                        score: 0,
                    }
                ],
                11: [],
                12: [],
                13: [],
                14: [],
                15: [],
                16: [],
                17: [],
                18: [],
            },
            overall: {
                1: [
                    {
                        id : 0,
                        score: 0,
                    }
                ],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
                10: [],
                11: [],
                12: [],
                13: [],
                14: [],
                15: [],
                16: [],
                17: [],
                18: [],                
            }
        },
    },
}
};

function compareScores(s1,s2) {
    //tie
    if(s1 === s2) return 0;

    //s1 beats s2
    if(s1 < s2) return 1;

    //s2 beats s1
    if(s2 < s1) return -1;

    return 0;
}
const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MATCHES:
            let matches = {...state.matches};
            //needs to loop through every match
                //then loop through every player's score in match up to hole progress
                    //- loop through every hole and compare nets scores of players
                    //- recalculate games per hole
            Object.keys(state.matches).map((key,index) => {

                //get players
                const player1 = Object.keys(state.matches[key].first)[0];
                const player2 = Object.keys(state.matches[key].second)[0];
                const p1Cap = state.matches[key].first[player1].hdcp;
                const p2Cap = state.matches[key].second[player2].hdcp;


                Object.keys(action.payload.scores[player1].holes).map((bottomKey,index) => {
                    const hole = index+1;
                    if(index >= action.payload.progress) return;

                    const hdcp = action.payload.course.holes[hole].hdcp;

                    //factor in hdcp to scores
                    const score1 = p1Cap >=hdcp ? action.payload.scores[player1].holes[hole] - 1 : action.payload.scores[player1].holes[hole];
                    const score2 = p2Cap >=hdcp ? action.payload.scores[player2].holes[hole] - 1 : action.payload.scores[player2].holes[hole];

                    const match = compareScores(score1,score2);

                    //now we need to loop through each game within a match and update it
                    //need to update front nine games
                    if(hole < 10) {

                        //we need to reset all 
                        matches[key].games.front[hole] = [];
               
                        if(hole === 1) {
                            matches[key].games.front[hole].push({
                                id : 0,
                                score: match,
                            });
                        } else {
                            //we need to loop through previous hole to generate this holes games
                            matches[key].games.front[hole-1].map((game,i)=> {
                                let g = game;
                                g.score = g.score + match;
                                matches[key].games.front[hole].push(g);
                            });
                        }


                    //we need to update back nine games
                    } else {

                        matches[key].games.back[hole] = [];
               
                        if(hole === 10) {
                            matches[key].games.back[hole].push({
                                id : 0,
                                score: match,
                            });
                        } else {
                            //we need to loop through previous hole to generate this holes games
                            matches[key].games.back[hole-1].map((game,i)=> {
                                let g = game;
                                g.score = g.score + match;
                                matches[key].games.back[hole].push(g);
                            });
                        }               

                    }
                    matches[key].games.overall[hole] = [];
                    if(hole === 1) {
                        matches[key].games.overall[hole].push({
                            id : 0,
                            score: match,
                        });
                    } else {
                        //we need to loop through previous hole to generate this holes games
                        matches[key].games.overall[hole-1].map((game,i)=> {
                            let g = game;
                            g.score = g.score + match;
                            matches[key].games.overall[hole].push(g);
                        });
                    }                        
                    
                });

                
            });
            return {...state, matches: matches};

        case ADD_PRESS:
            let matches2 = {...state.matches};

            let side = "front";
            const hole = action.payload.hole + 1;

            if(action.payload.hole > 8) {
                side = "back";
            }
  
            matches2[action.payload.id].games[side][hole].push({
                id : action.payload.team,
                score: 0,
            });
            return {...state, matches: matches2};
        default:
            return state;
    }
};
export default gamesReducer;