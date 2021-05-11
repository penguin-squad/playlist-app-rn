import React, {FC, useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList , TouchableOpacity, Dimensions,ScrollView,ActivityIndicator} from "react-native";
import * as Components from '../components/index';
import {connect} from "react-redux";
import * as ActionTypes from "../store/Playlist/actionTypes";
import Playlist from '../models/Playlist'
import {showToast} from '../components/toasts'
import auth from '@react-native-firebase/auth';
import {createPlaylist, changePlaylistID, getPlaylists} from '../store/Playlist/playlistActions'
const { width } = Dimensions.get('screen');


const PlayListsCollectionScreen =(props) => { 

//TODO   
//   const [name, setName] =useState("");
//   const [id, setID] =useState("");
// const [searchquery, setSearchQuery] = useState <string>(""); 

const goToPlayer = () => {
  props.navigation.navigate("player"); 
};  
  
console.log(props)
const [inputShown, setInputShown] = useState<boolean>(false);
const [newPlaylist, setNewPlaylist] = useState<Playlist | null>(null);
const [Playlists, setPlaylists] = useState<Playlist[] | null>(null);
const [loading, setLoading] = useState(false);
const startLoading = () => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 5000);
};

const handleSearch = (text: string) => { //instead of handle input
   const playlists: Playlist[] = props.playlists.filter((playlist: Playlist)=> playlist.name.includes(text) ); 
   setPlaylists(playlists); 
  }; 
    

const handleAddPlaylist =()=> {
    if (newPlaylist !==null && Playlists!==null)
    {
        props.addPlaylist(newPlaylist); 
    }
    else if(newPlaylist !==null && Playlists == null) {
        props.addPlaylist(newPlaylist); 
     }

};


useEffect(()=> {
    (()=>{
      setPlaylists(
        props.playlists.sort((a: Playlist, b: Playlist) =>{   
           return a.name > b.name ? 1 : b.name > a.name? -1 :0;
              }));
          }) ();
        }, []);

    useEffect(() => {
      startLoading();
      props.getPlaylists(props.user.uid);
    },[]) 


  return (
    <View style={styles.container}>

        {/* <Components.PlainInput 
           onChangeText={(text) => setName(text)} 
            placeholder="Enter name for your Playlist"/>  */}

        <Components.Search
            icon="md-search" 
            placeholder="Search" 
            onChangeText={(text) => handleSearch(text)}/>   

        <Components.Button title="Signout" onPress={()=> auth().signOut().then(() => {
          showToast("Sign out successfully");
          props.navigation.navigate("Login");
        }).catch((e)=>showToast(e))}/>  

        <Components.Header title= {"Playlists Collection: "+ props.firstPlaylist.name}/> 

        {loading?(<ActivityIndicator size="large" color="#0000ff"/>):(
          <>
          <FlatList style={{ marginVertical: 10}}
            data={props.playlists} 
            renderItem={({item})=> (
                <TouchableOpacity key={item.id} onLongPress={() => console.log("onLongPress")}
                    onPress={() => {
                      props.changePlaylistID(item.id)
                      props.navigation.navigate("songList")
                    }}
                    style={styles.listItem}>
        <Components.OneListItem id={item.id} name={item.name} />
                  
                    </TouchableOpacity>


         )} /> 
         </>
            )}
                  

        <View  style={{display: inputShown == false ? "flex" : "none"}}>    
        <Components.Button onPress={()=>setInputShown(true)} title="Add"/> 
        </View> 
    
        <View  style={{display: inputShown == true ? "flex" : "none"}}>    
        <View style={{flexDirection:"row", borderBottomWidth: 1}}>
            
        <Components.Iteminput icon="ios-add-circle-outline" placeholder="Album Name" 
            onChangeText={(text)=>{
              if(newPlaylist !== null){
                setNewPlaylist({...newPlaylist, name: text})
              } else{
                setNewPlaylist({name: text, Songs:[], userId: props.user.uid}); 
              }
            }}/>
        </View>
        
        <Components.Button onPress={()=>handleAddPlaylist()} title="Add New Album"/>

        </View>     
            
            
 {/* for future Player*/}
            <Components.ButtonFullScreen
              title="Player" 
              onPress={()=>{
                if(props.playlists === undefined || props.playlists.length === 0){
                  showToast("Create and Select a Playlist")
                }else {
                  goToPlayer()
                }
                
                }}/>
            </View> 

    );
};

// Redux code 
const mapStateToProps = (state) => ({ 
  firstPlaylist: state.reducer.firstPlaylist,
  playlists: state.playlistReducer.playlists,
  pl: state.reducer.playlist,
  playlistID: state.playlistReducer.playlistID,
  user: state.userReducer.user

});

const mapDispatchToProps = (dispatch) => ({ //TODO: ADD TO LISTS
    addPlaylist: (playlist: Playlist) => dispatch(createPlaylist(playlist)),
    changePlaylistID: (playlistID: string) => dispatch(changePlaylistID(playlistID)),
    getPlaylists: (userId: string) => dispatch(getPlaylists(userId))
    });
const connectComponent = connect (mapStateToProps, mapDispatchToProps);
export default connectComponent(PlayListsCollectionScreen);



const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: "center",
      paddingVertical: 10,
      alignItems: "center",
    },

    listItem: {
        padding: 5,
        backgroundColor: 'rgb(230, 230, 250)',
        width: width / 1.2,
        marginVertical: 2 
    },
  });