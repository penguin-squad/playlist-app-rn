import React, {FC, useState, useEffect,useRef} from "react";
import { View, Text, StyleSheet, FlatList , TouchableOpacity, Dimensions, ActivityIndicator} from "react-native";
import * as Components from '../components/index';
import Icon from "react-native-vector-icons/MaterialIcons";
import * as ActionTypes from "../store/actionTypes";
import Youtube from '../util/YoutubeAPI/Youtube'
import SearchResults from '../components/SearchResults';
import Song from '../models/Song'
import SongSearchResult from "../models/SongSearchResult";
import { PLAYLIST } from '../store/Playlist/actionTypes'
import Playlist from "../models/Playlist";
import { addSong } from "../store/Playlist/playlistActions";
import BackButton from "../components/BackButton";
import Swipeable from "react-native-gesture-handler/Swipeable";

const { width, height } = Dimensions.get('screen');


const SongsScreen =(props: any) => {
  console.log("Songs Screen",props)
  const {showSearchResults, setShowSearchResults,searchResults,newSongSearch,setNewSongSearch, loadingSearch, setLoadingSearch} = props;
  const gotoPlayLists = () => {
    props.navigation.navigate("playlists"); };
  
  const goToPlayer = () => {
    props.navigation.navigate("player"); };

  //const[songs, setSongs]= useState<[]| null> (null);  //TODO: define type of songs : Song
  const firstRender = useRef(true);
  
  //Gets data from APi
  // old code Button
  //const [name, setName] =useState("");    
  const handleInput = async () => {
    //props.addAlbum(newSongSearch); //unpdates title with name
    props.navigation.navigate("player");
  };

  const checkIfUserIsOwner : () => boolean = () => {
    return props.user.uid === props.currPlaylist.userId;
  } 

  const onPressItem = (val: boolean) =>{
    setShowSearchResults(false);
    setNewSongSearch("");
  }


  return (
    <>
    <View style={styles.container}>
      <View style ={styles.backBtn}>
        <BackButton  onPress = {()=>gotoPlayLists()} />
      </View>
      <View style={styles.header}>
      <Components.Header title= {"Playlist: "+ props.currPlaylist.name}/> 
      </View>

      <View>
       <Components.PlainInput 
        onChangeText={(text) => {
          setLoadingSearch(true)
          setNewSongSearch(text)
        }} 
        placeholder="Search for new song to add"
        value={newSongSearch}/> 
      </View>  

      {props.loading ? (<ActivityIndicator size="large" color="#ffffffff"/>):
            <View style ={styles.list}>
              <FlatList style={{ marginVertical: 10,display: showSearchResults == false ? "flex" : "none"}}
        data={props.currPlaylist.Songs}
        keyExtractor = {(item) => item.videoid} 
        showsVerticalScrollIndicator={true}
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
        videoid={item.videoid}
        playlistId={props.playlistID}
        Song={item}
        deleteSongFromPlaylist={props.deleteSongFromPlaylist}
        isOwner = {() => checkIfUserIsOwner() }
        />
      )} />
      </View>}
             
      <View style={{display: showSearchResults == true ? "flex": "none"}}>
        <View style = {{alignItems: "flex-end"}}>
        <Icon name="cancel" size={30} color="#900" onPress = {() => {
          setShowSearchResults(false);
          setNewSongSearch("");
        }}/>
        </View>
          {loadingSearch ? <ActivityIndicator size="large" color="#ffffffff"/>:<SearchResults Songs = {searchResults} setShowResults = {onPressItem}/> }
      </View>
            
            
            {/* <Components.ButtonFullScreen
              title="Enter" 
              onPress={()=>handleInput()}/> */}
      
   </View> 
   {<View style={styles.player}>
      <Components.ButtonFullScreen
        title="Player" 
        onPress={()=>goToPlayer()}/>
    </View>}
</>
    );
};


export default SongsScreen;



const styles = StyleSheet.create({
    container: {
      flex: 0.9,
      paddingVertical: 10,
      alignItems: "center",
      backgroundColor: 'rgb(34, 39, 63)' 
    },
    header: {
      width: width /1,
      height: height/14,
      marginTop: height/70, 
    },
    list: {
      //height:height/1.5,
    },
    backBtn: {
      width: width /1,
      height: 50,
      marginTop: height/30, 
     // position: 'absolute',
    },
    button: {
      width: '50%',
      height: 50,
      alignItems: 'center',
      marginBottom: 15,
      backgroundColor:'rgb(241, 126, 58)',
      //position: 'absolute',
    },
    buttonText: {
      color: '#FFF',
    },
    player: {
    flex: 0.1,
    backgroundColor: 'rgb(34, 39, 63)' ,
    alignItems: "center", 
    paddingVertical: 10,
    justifyContent: "center",
    //position: 'absolute',
    
    }

});
