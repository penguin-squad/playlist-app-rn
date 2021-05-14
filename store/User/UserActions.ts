import * as USER  from "./actionTypes";
import auth from '@react-native-firebase/auth';


export const LoginUser = (username: string, password: string) => {
    return async (dispatch: any, getState: any) => {
        try{
            const response = await auth()
            .signInWithEmailAndPassword(username, password)
        }catch(e){
            console.log(e);
        }
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
        try {
        await auth()
        .createUserWithEmailAndPassword(username, password)
    }catch(e){
        if (e.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
          if (e.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          console.error(e);

    }
    }
}