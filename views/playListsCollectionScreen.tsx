import React, {FC, useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList , TouchableOpacity, Dimensions,ScrollView, ToastAndroid} from "react-native";
import * as Components from '../components/index';
import Playlist from '../models/Playlist';
import BackButton from "../components/BackButton";

const { width, height } = Dimensions.get('screen');


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
    
  //1   
    <View style={styles.container}>

        {/* <Components.PlainInput 
           onChangeText={(text) => setName(text)} 
            placeholder="Enter name for your Playlist"/>  */}
 
{/* 2 */}
      <View style ={styles.backBtn}>
        <BackButton  onPress = {()=>""} />
      </View>

      <View style ={styles.search}>
        <Components.Search
            icon="md-search" 
            placeholder="Search" 
            onChangeText={(text) => handleSearch(text)}/>  

      </View>

      <View style ={styles.header}>
      <Components.Header title= {"Your playlists "+ props.user.email}/> 
      </View>

        
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
                  ShowToast("Create and Select a Playlist")
                }else {
                  goToPlayer()
                }
                
                }}/>
            </View> 

    );
};

// Redux code 

export default PlayListsCollectionScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 10,
      alignItems: "center",     
    },
    listItem: {
        padding: 5,
        backgroundColor: 'rgb(230, 230, 250)',
        width: width / 1.2,
        marginVertical: 2 
    },    
    backBtn: {
      width: width /1,
      height: height/14,
      marginTop: height/30, 
    },
    header: {
      width: width /1,
      height: height/14,
      marginTop: height/90, 
    },
    search:{
      width: width /1,
      height: height/14,
    }
  });