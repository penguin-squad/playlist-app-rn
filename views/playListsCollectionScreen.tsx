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
const [ inputShown, setInputShown ] = useState<boolean>(false);
const [ newPlaylist, setNewPlaylist ] = useState<Playlist | null>(null);
const [ Playlists, setPlaylists ] = useState<Playlist[] | null>(null);
const [ addAlbumInput, setAddAlbumInput ] =useState<string>("Enter name for new Playlist");

const handleSearch = (text: string) => { //instead of handle input
   const playlists: Playlist[] = props.playlists.filter((playlist: Playlist)=> playlist.name.includes(text) ); 
   setPlaylists(playlists); 
  }; 
    

const handleAddPlaylist =()=> {
    if (newPlaylist !==null && Playlists!==null)
    props.addPlaylist(newPlaylist); 
    else if(newPlaylist !==null && Playlists == null) 
        props.addPlaylist(newPlaylist); 
  

   setInputShown(false); 
   
  // clean input field 

};

useEffect(() => {
  props.getPlaylists(props.user.uid);
},[]);
   

    const ShowToast = (msg: string) =>{ToastAndroid.show(msg, ToastAndroid.SHORT)}
  
    return (
    
    <View style={styles.container}>

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
        <Components.Header title= {"Playlists for "+ props.user.email}/> 
        {/* TODO: chnge to username */}
      </View>

      <View style={styles.list}>  
        <FlatList style={{ marginVertical: 10}}
            data={props.playlists} 
            renderItem={({item})=> (
                <TouchableOpacity style={styles.listItem} key={item.id} onLongPress={() => console.log("onLongPress")}
                    onPress={() => {
                      props.changePlaylistID(item.id)
                      props.navigation.navigate("songList")
                    }} >
            
            <Components.OneListItem id={item.id} name={item.name} />
                   </TouchableOpacity>
         )} /> 
                  
      </View>

      <View style={{display: inputShown == false ? "flex" : "none"}}>    
        <Components.Button onPress={()=>setInputShown(true)} title="New album"/> 
      </View> 
    
      <View style={{display: inputShown == true ? "flex" : "none"}}>
      
              <Components.PlainInput 
           onChangeText={(text) => {
            if(newPlaylist !== null){
              setNewPlaylist({...newPlaylist, name: text})
            } else{
              setNewPlaylist({name: text, Songs:[], userId: props.user.uid}); 
            }
          }}
            placeholder={addAlbumInput}
            blurOnSubmit={true}
            /> 
      
      {/* <View style={{flexDirection:"row", borderBottomWidth: 1}}>
       <View>    
        <Components.Iteminput icon="ios-add-circle-outline" placeholder="Album Name" 
            onChangeText={(text)=>{
              if(newPlaylist !== null){
                setNewPlaylist({...newPlaylist, name: text})
              } else{
                setNewPlaylist({name: text, Songs:[], userId: props.user.uid}); 
              }
            }}/>
        </View>
        </View>  */}
        <View >
          <Components.Button onPress={()=>handleAddPlaylist()} title="Add"/>
        </View>
      </View>     
            
            
 {/* only visible if current song is not null*/}
          
            {/* <Components.ButtonFullScreen
              title="Player" 
              onPress={()=>{
                if(props.playlists === undefined || props.playlists.length === 0){
                  ShowToast("Create and Select a Playlist")
                }else {
                  goToPlayer()
                }
                
                }}/> */}

            </View> 

    );
};


export default PlayListsCollectionScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 10,
      alignItems: "center",
      backgroundColor:'rgb(34, 39, 63)',     
    },
    list: {
        padding: 5,
        backgroundColor: 'rgb(48,56,87)',
        width: width / 1.2,
        marginTop: height/50,
        marginBottom : height/60,
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
    listItem:{
  //    borderRadius: 15,
    }
  });