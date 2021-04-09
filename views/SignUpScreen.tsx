import * as React from 'react';
import {useState} from 'react';
import { StyleSheet} from 'react-native';
import { Text, View, TextInput,TouchableOpacity} from '../components/Themed';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../types';
import auth from '@react-native-firebase/auth';

// import { NavigationHelpersContext } from '@react-navigation/core';
//import Navigation from '../navigation';


// import EditScreenInfo from '../components/EditScreenInfo';


export type SignupProps={
    username:string;
    password:string;
    confirmpassword:string;
    navigation:StackNavigationProp<RootStackParamList,"NotFound">
}

/* signup button upload to firebase*/



const SignupView=(props:SignupProps) =>{
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfrimPassword] = useState<string>("");
    const confirmSignup=() =>{
        if (password !== confirmPassword){
            console.log('Keep password the same');
            return;
        }
          if (password === confirmPassword){
          props.navigation.navigate("Login");
          //return;
          /* upload firebase */
        }
        auth()
          .createUserWithEmailAndPassword(username, password)
          .then(() => {
            console.log('User account created & signed in!');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
        
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
            console.error(error);
          });
          

        }



  return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}> Username:</Text>
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
            <TouchableOpacity btnType="primary" style={styles.button} onPress={()=>props.navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
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