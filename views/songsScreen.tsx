import React, {FC, useState, useEffect,useRef} from "react";
import { View, Text, StyleSheet, FlatList , TouchableOpacity, Dimensions, ActivityIndicator} from "react-native";
import * as Components from '../components/index';
import {connect} from "react-redux";
import * as ActionTypes from "../store/actionTypes";
import Youtube from '../util/YoutubeAPI/Youtube'
import SearchResults from '../components/SearchResults';
import Song from '../models/Song'
import SongSearchResult from "../models/SongSearchResult";
import { PLAYLIST } from '../store/Playlist/actionTypes'
import Playlist from "../models/Playlist";
import { addSong } from "../store/Playlist/playlistActions";
import BackButton from "../components/BackButton";


const { width, height } = Dimensions.get('screen');





const SongsScreen =(props: any) => {
  console.log("Songs Screen",props)
  const {showSearchResults, setShowSearchResults,searchResults,newSongSearch,setNewSongSearch} = props;
  const gotoPlayLists = () => {
    props.navigation.navigate("playlists"); };
  
  const goToPlayer = () => {
    props.navigation.navigate("player"); };

  //const[songs, setSongs]= useState<[]| null> (null);  //TODO: define type of songs : Song
  const firstRender = useRef(true);
  
  //Gets data from APi
  // old code 
  //const [name, setName] =useState("");    
  const handleInput = async () => {
    //props.addAlbum(newSongSearch); //unpdates title with name
    props.navigation.navigate("player");
  };

  const checkIfUserIsOwner : () => boolean = () => {
    return props.user.uid === props.currPlaylist.userId;
  } 
  



  return (
    <View style={styles.container}>
      <View style ={styles.backBtn}>
        <BackButton  onPress = {()=>gotoPlayLists()} />
      </View>
      
      <Components.Header title= {"Playlist: "+ props.currPlaylist.name}/> 
        
      {props.loading ? (<ActivityIndicator size="large" color="#ffffffff"/>):
            <FlatList style={{ marginVertical: 10,display: showSearchResults == false ? "flex" : "none"}}
        data={props.currPlaylist.Songs}
        keyExtractor = {(item) => item.videoid} 
        renderItem={({item})=> (
      
      <Components.SongHolder
        key={item.title} 
        title={item.title}
        duration={item.duration}
        onOptionPress={item.onOptionPress}
        onAudioPress={() => {
          props.setCurrSong(item);
          props.navigation.navigate("player");

        }}
        activeSong={item.activeSong}
        isPlaying={item.isPlaying}
        thumbnail={item.thumbnail}
        isOwner = {() => checkIfUserIsOwner() }
        />
      )} />}
             
      <View style={{display: showSearchResults == true ? "flex": "none"}}>
          <SearchResults Songs = {searchResults} setShowResults = {setShowSearchResults}/>
      </View>

      <Components.PlainInput 
        onChangeText={(text) => setNewSongSearch(text)} 
        placeholder="Add new song here"
        value={newSongSearch}/>  
            
            
            {/* <Components.ButtonFullScreen
              title="Enter" 
              onPress={()=>handleInput()}/> */}
      {checkIfUserIsOwner() ? <Components.ButtonFullScreen
        title="Player" 
        onPress={()=>goToPlayer()}/> : null}
   </View> 

    );
};

// Redux code starts
export default SongsScreen;
// Redux code ends


const styles = StyleSheet.create({
    container: {
     // flexDirection: "column", 
      flex: 1,
      //justifyContent: "center",
      paddingVertical: 10,
      alignItems: "center",
      backgroundColor: 'rgb(34, 39, 63)' 

    },
    backBtn: {
      width: width /1,
      height: 50,
      marginTop: height/30, 
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
    // header: {
    //   width: width /1,
    //   height: 100,
    //   marginTop: height/30, 
    // },

});




