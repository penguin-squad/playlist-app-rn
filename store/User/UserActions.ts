import * as USER  from "./actionTypes";
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';


export const LoginUser = (username: string, password: string) => {
    return async (dispatch: any, getState: any) => {
        try{
            const response = await auth()
            .signInWithEmailAndPassword(username, password)
        }catch(e){
            console.log(e);
            if (e.code === 'auth/invalid-email') {
                Toast.show("Your email is invalid!");
              }
              if(e.code === 'auth/wrong-password'){
                Toast.show("Your password is wrong!")
              }
              if(e.code === 'auth/user-not-found'){
                Toast.show("User not found!");
              }
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
            Toast.show('That email address is already in use!');
          }
          if (e.code === 'auth/invalid-email') {
            Toast.show('That email address is invalid!');
          }
          console.error(e);

    }
    }
}