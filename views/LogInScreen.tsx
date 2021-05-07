import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Text, View, TextInput,TouchableOpacity} from '../components/Themed';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../types';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';





/* sign button for firebase auth*/



const LoginView = (props: any) =>{
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const handleSign= async () => {
      try{
        await props.Login(username,password);
        props.navigation.navigate('playlists')
      
      }catch(e){

        console.log(e);

      }
      


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