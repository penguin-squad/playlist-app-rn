import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Text, View, TextInput,TouchableOpacity} from '../components/Themed';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../types';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
// import EditScreenInfo from '../components/EditScreenInfo';


export type LoginProps={
    username:string;
    password:string;
    navigation:StackNavigationProp<RootStackParamList,"NotFound">
}


/* sign button for firebase auth*/



const LoginView = (props:LoginProps) =>{
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const handleSign=() => {
        auth()
        .signInWithEmailAndPassword(username, password)
        .then(() => {
          console.log('signed in!');
          props.navigation.navigate("playlists");
        })
        .catch(error => {
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
                    style={{ height: 60, fontSize:20 }}
                    placeholder="Enter Username"
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
            <TouchableOpacity btnType="primary" style={styles.button} onPress={()=>props.navigation.navigate("playlists")}>
              <Text style={styles.buttonText}>Loggin As Test</Text>
            </TouchableOpacity>
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