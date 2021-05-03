import * as React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Text, View, TextInput,TouchableOpacity} from '../components/Themed';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../types';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {showToast} from '../components/toasts';

export type LoginProps={
    username:string;
    password:string;
    navigation:StackNavigationProp<RootStackParamList,"NotFound">
}


const LoginView = (props:LoginProps) =>{
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [loading, setLoading] = useState(false);
    const startLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };


    const handleSign=() => { 
      if (username.length === 0){
          showToast("Please enter username!");
          return;
      }
      else if (password.length === 0){
          showToast("Please enter password!");
          return;
      }
      else{
        auth()
          .signInWithEmailAndPassword(username, password)
          .then(() => { 
            startLoading();
            showToast("You have login successfully!");
            props.navigation.navigate("playlists");
          })
          .catch(error => {
            if (error.code === 'auth/invalid-email') {
              showToast("Your email is invalid!");
            }
            if(error.code === 'auth/wrong-password'){
              showToast("Your password is wrong!")
            }
            if(error.code === 'auth/user-not-found'){
              showToast("User not found!");
            }
            // console.error(error);
          });
        }
        
    }
      
  return (
        <View style={styles.container}>
            {loading? (
            <ActivityIndicator size="large" color="#0000ff"/>):(
            <>
            <View>
                <Text style={styles.title}> Username:</Text>
                <TextInput
                    style={{ height: 60, fontSize:20 }}
                    placeholder="YourEmail@xxx.xxx"
                    value={username}
                    onChangeText={setUsername}
                />
                <Text style={styles.title}> Password:</Text>
                <TextInput
                    style={{ height: 60, fontSize:20 }}
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <TouchableOpacity btnType="primary" style={styles.button} onPress={()=>handleSign()}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity btnType="primary" style={styles.button} onPress={()=>props.navigation.navigate('Signup')}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            </>
            )}
        </View>
  );
}

export default LoginView;

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