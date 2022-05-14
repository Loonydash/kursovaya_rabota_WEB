import {applyMiddleware, combineReducers, createStore} from "redux";
import {valuteReducer} from "./valute-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
        valutes: valuteReducer,
    }
)

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;