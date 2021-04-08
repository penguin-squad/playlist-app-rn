import React, {FC, useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList , TouchableOpacity, Dimensions} from "react-native";
import * as Components from '../components/index';
import {connect} from "react-redux";
import * as ActionTypes from "../store/actionTypes";


const { width } = Dimensions.get('screen');



const SongsScreen =(props) => { 
  
  const gotoPlayLists = () => {
    props.navigation.navigate("playLists"); };
  
  const goToPlayer = () => {
    props.navigation.navigate("player"); };

  const[songs, setSongs]= useState<[]| null> (null);  //TODO: define type of songs : Song
  
  //Gets data from APi
  //const [newSong, setNewSong]= useState <{url: string}  | null > (null); 
  
 
  // old code 
  const [name, setName] =useState("");    
  const handleInput = () => {
    props.addAlbum(name); //unpdates title with name
    props.navigation.navigate("player");
  }; 
  
  useEffect(()=> {
    (()=>{
      setSongs(
        props.songslist.sort((a:any, b:any) =>{    //TODO: type Song
           return a.name > b.name ? 1 : b.name > a.name? -1 :0;
              }));
          }) ();
        }, []);  


  return (
        <View style={styles.container}>

        <Components.PlayerBtn  iconType='BACK' onPress={()=>gotoPlayLists()} />

        <Components.Header title= {"Playlist: "+ props.album.albumname}/>
        
        <FlatList style={{ marginVertical: 10}}
            data={songs} 
            renderItem={({item})=> (

              <Components.SongHolder
              title={item.title}
              duration={item.duration}
              onOptionPress={item.onOptionPress}
              onAudioPress={item.onAudioPress}
              activeSong={item.activeSong}
              isPlaying={item.isPlaying}/>
              )} /> 


            <Components.PlainInput 
              onChangeText={(text) => setName(text)} 
              placeholder="Add new song here"/>  
            
            
            {/* <Components.ButtonFullScreen
              title="Enter" 
              onPress={()=>handleInput()}/> */}
            

            <Components.ButtonFullScreen
              title="Player" 
              onPress={()=>goToPlayer()}/>
           

            </View> 

    );
};

// Redux code starts
const mapStateToProps = (state) => ({ album: state.album, songslist: state.songslist});

const mapDispatchToProps = (dispatch) => ({
    addAlbum: (albumname) => 
      dispatch({
          type: ActionTypes.ADD_PLAYLIST, 
          payload: {
          albumname,
    },
}),
});
const connectComponent= connect (mapStateToProps, mapDispatchToProps);
export default connectComponent(SongsScreen);
// Redux code ends


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    listItem: {
      padding: 5,
      backgroundColor: 'rgb(230, 230, 250)',
      width: width / 1.2,
      marginVertical: 2 
  }
});