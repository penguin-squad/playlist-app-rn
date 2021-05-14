import * as React from 'react';
import { StyleSheet,ImageBackground, ActivityIndicator } from 'react-native';
import { Text, View, TextInput,TouchableOpacity} from '../components/Themed';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../types';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';





/* sign button for firebase auth*/



const LoginView = (props: any) =>{
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const [loading, setLoading] = useState(false);

    const handleSign = async () => {
      setLoading(true);
      try{
        await props.Login(username,password);
        setLoading(false);
        props.navigation.navigate('playlists');
      }catch(e){
        setLoading(false);
        console.log(e);
      }
      


    }
  
  const image = { uri: "https://images.pexels.com/photos/5007442/pexels-photo-5007442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" };
   

  return (
    <View style={styles.container}>

      {/* <ImageBackground source={image} style={styles.image}> 

      </ImageBackground> */}
        {loading? (
            <ActivityIndicator size="large" color="#ffffffff"/>):(
            <>
            <View>
                <Text style={styles.title}> Email:</Text>
                <TextInput
                    style={{ height: 60, fontSize:20,  backgroundColor:'rgb(34, 39, 63)'}}
                    placeholder="Enter Email"
                    value={username}
                    onChangeText={setUsername}
                    placeholderTextColor={'rgb(205, 206, 207)' }
                />
                <Text style={styles.title}> Password:</Text>
                <TextInput
                    style={{ height: 60, fontSize:20,  backgroundColor:'rgb(34, 39, 63)'}}
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={setPassword}
                    placeholderTextColor={'rgb(205, 206, 207)' }
                />
            </View>
            <TouchableOpacity btnType="primary" style={styles.button} onPress={()=>handleSign()} >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity btnType="primary" style={styles.button} onPress={()=>props.navigation.navigate('Signup')}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity btnType="primary" style={styles.button} onPress={()=>props.navigation.navigate("playlists")}>
              <Text style={styles.buttonText}>Loggin As Test</Text>
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
      backgroundColor:'rgb(34, 39, 63)',
    },
    title: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'rgb(205, 206, 207)', 
      backgroundColor:'rgb(34, 39, 63)',
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
      color: '#FFF',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    },
  });