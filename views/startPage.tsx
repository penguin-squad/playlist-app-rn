import React, { FC , useState } from "react";
import { Pressable, StyleSheet, View, Modal, ImageBackground, Dimensions } from "react-native";
import * as Components from '../components/index';
import { Text, TextInput, TouchableOpacity } from "../components/Themed";

const { width, height } = Dimensions.get('screen');


const startPage = (props) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [playlistId, setPlaylistId] = useState<string>("");

    const handleInputPlaylistId = () => {
      props.changePlaylistID(playlistId);
        props.navigation.navigate("songList");
        setModalVisible(false); 
    }

    const setPlaylistIDWithFilter = (value: string) => {
      setPlaylistId(value.replace(/\s/g,''));

    }
    

 return (
  <View style = {styles.container}>

    <View style={styles.header}>
      <Components.Header title= {"Share Playlist"}/> 
    </View>

      <ImageBackground source={require('../assets/icons/logo.png')} style={styles.image}>
     
      <Text style={{opacity: 0.01}}>
          An Application for People Share and Contribute to Playlist
        </Text>

      </ImageBackground>
      <TouchableOpacity btnType="primary" style={styles.button} onPress={()=>props.navigation.navigate("Login")} >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity btnType="primary" style={styles.button} onPress={()=>setModalVisible(true)} >
        <Text style={styles.buttonText}>Contribute to Playlist</Text>
      </TouchableOpacity>

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

          <View>
            <Text style={styles.modalTitle}>Playlist ID:</Text>
          </View>
              
            <TextInput style ={styles.playlistIdInput} onChangeText = {setPlaylistIDWithFilter} value={playlistId}/>
           
           
            <Pressable
              style={styles.buttonModal}
              onPress={handleInputPlaylistId}
            >
              <Text style={styles.buttonText}>Contribute</Text>
            </Pressable>

            <Pressable
              style={styles.buttonModal}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
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
        backgroundColor: 'rgb(34, 39, 63)' 
      },
      header: {
        width: width /1,
        height: height/14,
        marginTop: height/70, 
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(205, 206, 207)', 
        //backgroundColor:'rgb(34, 39, 63)',
      },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor:'rgb(34, 39, 63)',
      },
    modalView: {
        margin: 10,
        //backgroundColor: "white",
        backgroundColor: 'rgb(48,56,87)',
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
        // borderRadius: 20,
        // padding: 10,
        // elevation: 2,
        // height:50,
        // width: 150,
        // margin: 15
        width: '50%',
        height: 50,
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor:'rgb(241, 126, 58)',
      },
      buttonText: {
        color: '#FFF',
      },
      buttonModal:{
        padding: 12,
        marginTop: 15,
        width: '50%',
        height: 50,
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor:'rgb(241, 126, 58)',
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      playlistIdInput:{
        marginTop:10,
          width: 200,
          height: 40,
          borderWidth: 2,
          borderRadius: 15,
          backgroundColor:'rgb(34, 39, 63)',
          color:'rgb(205, 206, 207)',        
          
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      alert: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "black"
      },
      image: {
        flex: 0.75,
        resizeMode: "cover",
        justifyContent: "center",
        //width: '50%',
       // height: '50%'
      },
});

