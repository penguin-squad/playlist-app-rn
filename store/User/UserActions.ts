import * as USER  from "./actionTypes";
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';


export const LoginUser = (username: string, password: string) => {
    return async (dispatch: any, getState: any) => {
         return await auth().signInWithEmailAndPassword(username, password)
    }
}

export const ChangeInUser = () => {
    return async (dispatch: any, getState: any) => {
        try{
            auth().onAuthStateChanged(userState => {
              dispatch({type: USER.CHANGE_STATE, payload: userState});
              });
        }catch(e){
            console.log(e);
        }
    }
}

export const SignUpUser = (username: string, password: string) => {
    return async (dispatch: any, getState: any) => {

        return await auth()
        .createUserWithEmailAndPassword(username, password)
        
    }
}

export const LogOut = () => {
    return async (dispatch: any, getState: any) => {
        try {
        await auth()
         .signOut()
         .then(() => console.log('!!!!!!User signed out!'));
         } catch(e) {
          console.error(e);

    }
    }
}