import React, { FC , useState } from "react";
import { StyleSheet } from "react-native";
import {View, Button, Modal } from "react-native";
import { Text, TextInput,TouchableOpacity } from "../components/Themed";




const startPage = (props) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [playlistId, setPlaylistId] = useState<string>("");

    const handleInputPlaylistId = () => {
        props.changePlaylistID(playlistId);
        setModalVisible(false);
        props.navigation.navigate("songList");
    }
 return (
  <View style = {styles.container}>
      <Text>Playlist App</Text>
      <Text>
          An Application for People Share and Contribute Playlist from multiple Source. 
          Currently We Support Youtube and SoundCloud
        </Text>
        <TouchableOpacity btnType="primary" style={styles.button} onPress={() => props.navigation.navigate("Login")}>
          <Text style={styles.textStyle}>Login To Access</Text>
        </TouchableOpacity>
        <TouchableOpacity btnType="primary" style={styles.button} onPress = {()=>""}>
          <Text style={styles.textStyle}>Search For Playlist</Text>
        </TouchableOpacity>
        <TouchableOpacity btnType="primary" style={styles.button} onPress = {() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Contribute</Text>
        </TouchableOpacity>
        {/* <Button onPress={() => props.navigation.navigate("Login")} title = "Login To Access your Playlists"/>
        <Button onPress = {()=>""} title = "Search For Playlist"/>
        <Button title = "Contribute to Playlist with ID" onPress = {() => setModalVisible(true)}/> */}
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
            <TextInput style ={styles.playlistIdInput} onChangeText = {setPlaylistId} value={playlistId}/>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={handleInputPlaylistId}
            >
              <Text style={styles.textStyle}>Contribute</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
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
        height:300,
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
      }
});

