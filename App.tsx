
import React from 'react';
import { StyleSheet } from 'react-native';
import {SongsScreen, PlayListsCollectionScreen, PlayerScreen} from "./views/index";
import PlaylistCollectionScreenPresenter from './presenters/playListsCollectionScreenPresenter';
import PlayerScreenPresenter from './presenters/PlayScreenPresenter';
import SongsScreenPresenter from './presenters/songsScreenPresenter';
import {createStackNavigator} from "@react-navigation/stack"; //native
import {NavigationContainer} from "@react-navigation/native";
import {Provider, RootStateOrAny, useSelector} from "react-redux";
import store from "./store/store";
import {  Text } from "react-native";
import LoginView from './views/LogInScreen';
import SignupView from './views/SignUpScreen';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import startPagePresenter from './presenters/startPagePresenter';
import LoginScreenPresenter from './presenters/LoginScreenPresenter';
import { ChangeInUser } from './store/User/UserActions';
const {Screen, Navigator} = createStackNavigator();




const App =() =>{
  
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(ChangeInUser());
  }, []);


  return(  
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
        
      }}>
        <Screen name="Home" component={startPagePresenter}></Screen>
        <Screen name="Login" component={LoginScreenPresenter}></Screen>
        <Screen name="Signup" component={SignupView}></Screen>
        <Screen name= "playlists" component={PlaylistCollectionScreenPresenter}/>
        <Screen name= "songList" component={SongsScreenPresenter}/>
        <Screen  name= "player" component={PlayerScreenPresenter}/>

      </Navigator>
    </NavigationContainer> 
 )
}


const WrapperApp = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>

  );
}
export default WrapperApp;

const styles = StyleSheet.create({
 container: {
   flex: 1,
   //justifyContent: "center",
   paddingVertical: 10,
   alignItems: "center",
 },

 title: {
   fontSize: 17,
   fontWeight: 'bold',
},
});


