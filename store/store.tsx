// Updates State
import { combineReducers, createStore } from "redux";
import { reducer } from "./reducer";
import {userReducer} from "./User/reducer"

const store = createStore(combineReducers({reducer,userReducer}));

export default store;