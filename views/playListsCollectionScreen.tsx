import React, {FC, useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList , TouchableOpacity, Dimensions,ScrollView} from "react-native";
import * as Components from '../components/index';
import {connect} from "react-redux";
import * as ActionTypes from "../store/actionTypes";
import {Album} from "../store/album";

const { width } = Dimensions.get('screen');


const PlayListsCollectionScreen =(props) => { 

//TODO   
//   const [name, setName] =useState("");
//   const [id, setID] =useState("");
// const [searchquery, setSearchQuery] = useState <string>(""); 

  const goToPlayer = () => {
    props.navigation.navigate("player"); 
};
  

const [inputShown, setInputShown] = useState<boolean>(false);
const [albums, setAlbums] = useState <Album[] | null>(null);
const [newAlbum, setNewAlbum] = useState<Album | null>(null);


const handleSearch = (text) => { //instead of handle input
   const albums: [] = props.pl.filter((album)=> album.name.includes(text) );
   
    setAlbums(albums); }; 
    

const handleAddAlbum =()=> {
    if (newAlbum !==null && albums!==null)
    { 
        //console.log("1: "+albums + "-->"+ newAlbum);
        setAlbums([...albums, newAlbum]);
        props.addPlaylist(albums); 
    }
    else if(newAlbum !==null && albums ==null) {
        setAlbums([newAlbum]);
        props.addPlaylist(albums); 
        //console.log("2: "+albums);
     }

};


useEffect(()=> {
    (()=>{
      setAlbums(
        props.pl.sort((a: Album, b: Album) =>{   
           return a.name > b.name ? 1 : b.name > a.name? -1 :0;
              }));
          }) ();
        }, []);   


    
  return (
    <View style={styles.container}>

        {/* <Components.PlainInput 
           onChangeText={(text) => setName(text)} 
            placeholder="Enter name for your Playlist"/>  */}

        <Components.Search
            icon="md-search" 
            placeholder="Search" 
            onChangeText={(text) => handleSearch(text)}/>   

        <Components.Header title= {"Playlists Collection: "+ props.firstPlaylist.name}/> 

        
        <FlatList style={{ marginVertical: 10}}
            data={albums} 
            renderItem={({item})=> (

                <TouchableOpacity key={item.id} onLongPress={() => console.log("onLongPress")}
                    onPress={()=> console.log("onPress")}
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
              if(newAlbum !==null){
                setNewAlbum({...newAlbum, name: text})
              } else{
                setNewAlbum({name: text, id: "0"}); }
            }}/>
        </View>

        <View style={{flexDirection:"row", borderBottomWidth: 1}}>             
        <Components.Iteminput icon="ios-add-circle-outline" placeholder="Album ID" 
            onChangeText={(text)=>{
                if(newAlbum !==null){
                  setNewAlbum({...newAlbum, id: text})
                } else{
                   setNewAlbum({name: "", id: text}); }
                 }}/>
        </View>
        
        <Components.Button onPress={()=>handleAddAlbum()} title="Add New Album"/>

        </View>     
            
            
 {/* for future Player*/}
            <Components.ButtonFullScreen
              title="Player" 
              onPress={()=>goToPlayer()}/>
            </View> 

    );
};

// Redux code 
const mapStateToProps = (state) => ({ firstPlaylist: state.firstPlaylist, playlists:state.playlists, pl:state.playlist });

const mapDispatchToProps = (dispatch) => ({ //TODO: ADD TO LISTS
    addPlaylist: (albums) => 
      dispatch({
          type: ActionTypes.NEW_PLAYLIST, 
          
          payload: {albums}
        })
    });
const connectComponent= connect (mapStateToProps, mapDispatchToProps);
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