import React, {FC, useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList , TouchableOpacity, Dimensions,ScrollView, ToastAndroid} from "react-native";
import * as Components from '../components/index';
import Playlist from '../models/Playlist'
import { changePlaylistID } from "../store/Playlist/playlistActions";
const { width } = Dimensions.get('screen');


const PlayListsCollectionScreen =(props: any) => { 


const goToPlayer = () => {
  props.navigation.navigate("player"); 
};  
  
console.log("Playlist Collections:", props)
const [inputShown, setInputShown] = useState<boolean>(false);
const [newPlaylist, setNewPlaylist] = useState<Playlist | null>(null);
const [Playlists, setPlaylists] = useState<Playlist[] | null>(null);

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

useEffect(() => {
  props.getPlaylists(props.user.uid);
},[]);

    



    const ShowToast = (msg: string) =>{ToastAndroid.show(msg, ToastAndroid.SHORT)}
  return (
    <View style={styles.container}>

        {/* <Components.PlainInput 
           onChangeText={(text) => setName(text)} 
            placeholder="Enter name for your Playlist"/>  */}

        <Components.Search
            icon="md-search" 
            placeholder="Search" 
            onChangeText={(text) => handleSearch(text)}/>   

        <Components.Header title= {"Playlists Collection for: "+ props.user.email}/> 

        
        <FlatList style={{ marginVertical: 10}}
            data={props.playlists} 
            keyExtractor={(item) => item.id}
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
            }}
            value = {newPlaylist?.name}/>
        </View>
        
        <Components.Button onPress={()=>handleAddPlaylist()} title="Add New Album"/>

        </View>     
            
            
 {/* for future Player*/}
            {props.playlistID !== "1" ? 
            <Components.ButtonFullScreen
              title="Player" 
              onPress={()=>{ goToPlayer() }}/> : null
            }
            </View> 

    );
};

// Redux code 

export default PlayListsCollectionScreen;



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