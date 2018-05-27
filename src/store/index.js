import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/index";
import { routerReducer, routerMiddleware } from 'react-router-redux';
import history from '../history';
import gamesReducer from '../games/reducer';
import courseReducer from '../course/reducer';
import playersReducer from './reducers/players';
import scoresReducer from './reducers/scores';
import roundReducer from '../round/reducer';
import matchesReducer from '../matches/reducer';


const middleware = routerMiddleware(history)


const reducers = combineReducers({
    rootReducer,
    router: routerReducer,
    games: gamesReducer,
    players: playersReducer,
    course: courseReducer,
    round: roundReducer,
    scores: scoresReducer,
    matches: matchesReducer
})

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(middleware),
));

export default store;
