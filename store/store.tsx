// Updates State
import { combineReducers, createStore } from "redux";
import { reducer } from "./reducer";
import {userReducer} from "./User/reducer"
import {playlistReducer} from './Playlist/reducer'
const store = createStore(combineReducers({playlistReducer,reducer,userReducer}));

export default store;