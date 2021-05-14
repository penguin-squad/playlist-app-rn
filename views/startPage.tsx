import React, { FC , useState } from "react";
import { Pressable, StyleSheet, View, Modal, ImageBackground  } from "react-native";
import * as Components from '../components/index';

import { Text, TextInput } from "../components/Themed";


const startPage = (props) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [playlistId, setPlaylistId] = useState<string>("");

    const handleInputPlaylistId = () => {
        props.changePlaylistID(playlistId);
        props.navigation.navigate("songList");
    }

    const setPlaylistIDWithFilter = (value: string) => {
      setPlaylistId(value.replace(/\s/g,''));

    }
    
   // const image = { uri: "https://images.pexels.com/photos/5007442/pexels-photo-5007442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" };

 return (
  <View style = {styles.container}>

      <Text>Playlist App</Text>
      {/* <ImageBackground source={image} style={styles.image}> */}
     
      <Text>
          An Application for People Share and Contribute Playlist from multiple Source. 
          Currently We Support Youtube and SoundCloud
        </Text>

      {/* </ImageBackground> */}
 
        <Components.Button onPress={() => props.navigation.navigate("Login")} title = "Login To Access your Playlists"/>
        <Components.Button onPress = {()=>""} title = "Search For Playlist"/>
        <Components.Button title = "Contribute to Playlist with ID" onPress = {() => setModalVisible(true)}/>
        
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <Text>Playlist ID:</Text>
            <TextInput style ={styles.playlistIdInput} onChangeText = {setPlaylistIDWithFilter} value={playlistId} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleInputPlaylistId}
            >
              <Text style={styles.textStyle}>Contribute</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  </View>
    );
};

export default startPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        height:250,
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      modalText: {
        
        marginBottom: 15,
        textAlign: "center"
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        height:50,
        width: 150,
        margin: 15
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      playlistIdInput:{
        marginTop:10,
          width: 200,
          height: 40,
          borderWidth: 2,
          borderRadius: 15
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
});

