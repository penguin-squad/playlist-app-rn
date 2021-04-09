// Updates Store
import * as ActionTypes from "./actionTypes";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
const initialState: FirebaseAuthTypes.User | null = auth().currentUser;

const userReducer = (state = initialState, action:any) => {
    switch(action.type){
       case ActionTypes.USER_CHANGE: //test, delete later
        return{
            ...state, 
            user: action.payload,
        };
        default:
            return state;

    }
};

export {userReducer};
