import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/index";
import { routerReducer, routerMiddleware } from 'react-router-redux';
import history from '../history';
import gamesReducer from '../games/games-reducer';
import playersReducer from './reducers/players';


const middleware = routerMiddleware(history)


const reducers = combineReducers({
    rootReducer,
    router: routerReducer,
    games: gamesReducer,
    players: playersReducer
})

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(middleware),
));

export default store;
