// Updates Store
import * as LOADING from "./actionTypes";
const initialState = {
    loading: false
}

const loadingReducer = (state = initialState, action:any) => {
    switch(action.type){
       case LOADING.LOADING: //test, delete later
        return{
            ...state, 
            loading: action.payload,
        }; 
        default:
            return state;

    }
};

export {loadingReducer};
