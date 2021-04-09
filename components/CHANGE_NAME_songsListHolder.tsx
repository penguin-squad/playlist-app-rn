
//Change name: to confusing. there is one more file with simular name


import React, {FC, useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Components from './index';
import {connect} from "react-redux";
import * as ActionTypes from "../store/actionTypes";


const SongsListHolder =(props) => { 
  const [name, setName] =useState("");    
  const handleInput = () => {
    props.addAlbum(name); //unpdates title with name
    props.navigation.navigate("player");
  }; 
    
  return (
        <View style={styles.container}>

            <Components.Header title= {"Playlist: "+ props.album.albumname}/>
            <Components.PlainInput 
              onChangeText={(text) => setName(text)} 
              placeholder="Enter name for your Playlist"/>  
            <Components.ButtonFullScreen
              title="Enter" 
              onPress={()=>handleInput()}/>
            
            </View> 

    );
};

// Redux code starts
const mapStateToProps = (state) => ({ album: state.album});

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
export default connectComponent(SongsListHolder);
// Redux code ends


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
