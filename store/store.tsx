// Updates State
import { applyMiddleware, combineReducers, createStore } from "redux";
import {userReducer} from "./User/reducer"
import {playlistReducer} from './Playlist/reducer'
import {loadingReducer} from './Loading/reducer'
import thunk from 'redux-thunk';
const store = createStore(combineReducers({playlistReducer, userReducer, loadingReducer}),applyMiddleware(thunk));

export default store;