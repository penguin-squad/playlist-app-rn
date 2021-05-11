import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, ActivityIndicator} from 'react-native';
import { Text, View, TextInput,TouchableOpacity} from '../components/Themed';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../types';
import auth from '@react-native-firebase/auth';
import {showToast} from '../components/toasts'

export type SignupProps={
    username:string;
    password:string;
    confirmpassword:string;
    navigation:StackNavigationProp<RootStackParamList,"NotFound">
}


const SignupView=(props:SignupProps) =>{
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfrimPassword] = useState<string>("");

    const [loading, setLoading] = useState(false);
    const startLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    };

    const confirmSignup=() =>{
      if (username.length === 0){
        showToast("Please enter username!");
        return;
      }
      if ((password.length && confirmPassword.length) === 0){
        showToast("Please enter password!");
        return;
      }
      else{
        if (password !== confirmPassword){
          showToast("Keep password the same！")
            return;
        }
        else{
        auth()
          .createUserWithEmailAndPassword(username, password)
          .then(() => {
            startLoading();
            showToast("User account created & signed in!");
            props.navigation.navigate("playlists");
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              showToast("That email address is already in use!");
            }
        
            if (error.code === 'auth/invalid-email') {
              showToast("Your email is invalid!");
            }

            if (error.code === 'auth/weak-password') {
              showToast("At least 6 characters!");
            }
            //console.error(error);
          });

        }
        
        }

        }



  return (
        <View style={styles.container}>
            {loading? (
            <ActivityIndicator size="large" color="#0000ff"/>):(
            <>
            <View>
                <Text style={styles.title}> Email:</Text>
                <TextInput
                    style={{ height: 60 , fontSize:20}}
                    placeholder="Enter Username"
                    value = {username}
                    onChangeText={setUsername}
                />
                <Text style={styles.title}> Password:</Text>
                <TextInput
                    style={{ height: 60 , fontSize:20}}
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={setPassword}
                />
                <Text style={styles.title}> Confirm Password:</Text>
                <TextInput
                    style={{ height: 60 , fontSize:20}}
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfrimPassword}
                />
            </View>
            <TouchableOpacity btnType="primary" style={styles.button} onPress={()=>confirmSignup()}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity btnType="primary" style={styles.button} onPress={()=>props.navigation.goBack()}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            </>
            )}
        </View>
  );
}

export default SignupView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 17,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    button: {
      width: '50%',
      height: 50,
      alignItems: 'center',
      marginBottom: 15
    },
    buttonText: {
      color: '#FFF'
    },
  });