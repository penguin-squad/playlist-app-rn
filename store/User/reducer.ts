// Updates Store
import * as USER from "./actionTypes";
const initialState = {
    user: {
        email: ""
    }
}

const userReducer = (state = initialState, action:any) => {
    switch(action.type){
       case USER.LOGIN: //test, delete later
        return{
            ...state, 
            user: action.payload,
        };
        case USER.CHANGE_STATE:
        return {
            ...state,
            user: action.payload
        }; 
        default:
            return state;

    }
};

export {userReducer};
