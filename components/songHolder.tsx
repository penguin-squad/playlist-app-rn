import React, {FC,useState} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback,Modal} from "react-native";
import { TouchableOpacity } from "../components/Themed";
import  Entypo  from 'react-native-vector-icons/Entypo';

const { width } = Dimensions.get('window');


const choseIcon = (isPlaying: boolean)=>{
    if(isPlaying)
        return (<Entypo name="controller-paus" size={24} color="black"/>); //color.ACTIVE_FONT
    return <Entypo name="controller-play" size={24} color="black"/> //color.ACTIVE_FONT  
};


// interface Props{
//     title: string;
//     duration?: 3.0;
//     onOptionPress?: false; 
//     onSongPress?: false; 
//     activeSong?:false ;
//     isPlaying?: false;

// }

//const Songs =(props:Props) => { 
const SongHolder =(props) => {     
const { title, duration, onOptionPress, onAudioPress, activeSong,isPlaying   } = props;
const [modalVisible, setModalVisible] = useState<boolean>(false);


 return (
<>
<View style={styles.container}>
{/* <TouchableWithoutFeedback onPress={()=>onAudioPress}>     */}
<TouchableWithoutFeedback onPress={()=>{console.log("Audio is pushed, take me to the player") //TODO: go to player + set me to false
                        onAudioPress===true}}>                      
<View style={styles.leftContainer}>
  <View style={[ styles.smallPic, {
      backgroundColor: activeSong ? "rgba(81,135,200,1)" : "black", //color.ACTIVE_BG && color.FONT_LIGHT 
   
    }, ]} >

    <Text style={styles.smallPicText}>
    {activeSong ? choseIcon(isPlaying) : (title.[0])} 
   
    </Text>
 </View>  

<View style={styles.titleContainer}>
<Text numberOfLines={1} style={styles.titleText}>  {title}  </Text>
<Text style={styles.timeText}> {duration} </Text>
</View>
</View>
</TouchableWithoutFeedback>

<View style={styles.rightContainer}>
    <Entypo
        // onPress={props.song.onOptionPress}
        //onPress={onOptionPress}
        onPress={() => setModalVisible(true)
            // ()=>{console.log("on Options Push"),
            // onOptionPress===true;}
        } //samething is to be done + set on press to false
        name='dots-three-vertical'
        size={20}
        //color={color.FONT_MEDIUM}
        style={{ padding: 10 }}
    />
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
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Delete</Text>
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
</View>
<View style={styles.separator}> 
</View>
</>
    );
};

export default SongHolder;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        flexDirection: 'row',
        alignSelf: 'center',
        width: width - 80,
       // backgroundColor: "red",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex:1,
        //backgroundColor: "red",

    },
    rightContainer: {
        flexBasis: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: "red",

    },
    smallPic:{ //Tumbnail
        height: 50,
        flexBasis: 50,
        backgroundColor: "black", //color.FONT_LIGHT
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
    smallPicText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white", //color.FONT
 
    },
    titleContainer: {
        width: width -180,
        paddingLeft:10,
    },
    titleText: {
        fontSize: 16,
        color: "black", //color.FONT
    },
    timeText: {
        fontSize: 14,
        color: "grey", //color.LIGHT
    },
    separator:{
        width: width - 80,
        backgroundColor: '#333',
        opacity: 0.3,
        height: 0.5,
        alignSelf: 'center',
        marginTop: 10,
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        height:200,
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
});
