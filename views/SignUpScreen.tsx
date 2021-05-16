import * as React from 'react';
import {useState} from 'react';
import { StyleSheet,ActivityIndicator} from 'react-native';
import { Text, View, TextInput,TouchableOpacity} from '../components/Themed';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../types';
import auth from '@react-native-firebase/auth';

// import { NavigationHelpersContext } from '@react-navigation/core';
//import Navigation from '../navigation';



/* signup button upload to firebase*/



const SignupView=(props: any) =>{
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfrimPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const confirmSignup =  async () => {
      setLoading(true);
        if (password !== confirmPassword){
          
            console.log('Keep password the same');
            setLoading(false);
            return;
            
        }
        if (password === confirmPassword){
          await props.SignUpUser(username,password)
          setLoading(false);
          props.navigation.navigate("Login"); // TOAST SHOULD BE AROUND HERE
          //return;
          /* upload firebase */
          setLoading(false);
        } 
    }



  return (
        <View style={styles.container}>
          {loading? (
            <ActivityIndicator size="large" color="#ffffff"/>):(
            <>
            <View style={styles.middle}>
                <Text style={styles.title}> Email:</Text>
                <TextInput
                    style={{ height: 60 , fontSize:20, backgroundColor:'rgb(34, 39, 63)'}}
                    placeholderTextColor={'rgb(205, 206, 207)'}
                    placeholder="Enter Email"
                    value = {username}
                    onChangeText={setUsername}
                    color={"white"}
                />
                <Text style={styles.title}> Password:</Text>
                <TextInput
                    style={{ height: 60 , fontSize:20, backgroundColor:'rgb(34, 39, 63)'}}
                    placeholderTextColor={'rgb(205, 206, 207)'}
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={setPassword}
                    color={"white"}
                />
                <Text style={styles.title}> Confirm Password:</Text>
                <TextInput
                    style={{ height: 60 , fontSize:20, backgroundColor:'rgb(34, 39, 63)'}}
                    placeholderTextColor={'rgb(205, 206, 207)' }
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfrimPassword}
                    color={"white"}

                />
            </View>
            <TouchableOpacity btnType="primary" style={styles.button} onPress={()=>confirmSignup()}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity btnType="primary" style={styles.button} onPress={()=>props.navigation.navigate('Login')}>
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
      backgroundColor:'rgb(34, 39, 63)',
    },
    middle:{
      justifyContent: 'center',
      backgroundColor:'rgb(34, 39, 63)',
      width: '43%',
    },
    title: {
      fontSize: 17,
      fontWeight: 'bold',
      backgroundColor:'rgb(34, 39, 63)',
      color: 'rgb(205, 206, 207)',
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
      marginBottom: 15,
      backgroundColor:'rgb(241, 126, 58)',
    },
    buttonText: {
      color: '#FFF'
    },
  });