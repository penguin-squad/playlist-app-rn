// Updates State
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer } from "./reducer";
import {userReducer} from "./User/reducer"
import {playlistReducer} from './Playlist/reducer'
import thunk from 'redux-thunk';
const store = createStore(combineReducers({playlistReducer,reducer,userReducer}),applyMiddleware(thunk));

export default store;