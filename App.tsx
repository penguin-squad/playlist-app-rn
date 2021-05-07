
import React from 'react';
import { StyleSheet } from 'react-native';
import {SongsScreen, PlayListsCollectionScreen, PlayerScreen} from "./views/index";

import {createStackNavigator} from "@react-navigation/stack"; //native
import {NavigationContainer} from "@react-navigation/native";
import {Provider, RootStateOrAny, useSelector} from "react-redux";
import store from "./store/store";
import {  Text } from "react-native";
import LoginView from './views/LogInScreen';
import SignupView from './views/SignUpScreen';
import {useDispatch} from 'react-redux';
import {USER_CHANGE} from './store/User/actionTypes';
import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import startPage from './presenters/startPagePresenter';
const {Screen, Navigator} = createStackNavigator();




const App =() =>{
  
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.user)

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      console.log(userState);
      dispatch({type: USER_CHANGE,payload: userState});
      console.log(user)
    });
  }, []);


  return(  
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
        
      }}>
        <Screen name="Home" component={startPage}></Screen>
        <Screen name="Login" component={LoginView}></Screen>
        <Screen name="Signup" component={SignupView}></Screen>
        <Screen name= "playlists" component={PlayListsCollectionScreen}/>
        <Screen name= "songList" component={SongsScreen}/>
        <Screen  name= "player" component={PlayerScreen}/>

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

//  export default function App() {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();

//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <SafeAreaProvider>
//         <Navigation colorScheme={colorScheme} />
//         <StatusBar />
//       </SafeAreaProvider>
//     );
//   }
// }
