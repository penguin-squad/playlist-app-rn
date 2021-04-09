import React, {FC} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
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
        onPress={()=>{console.log("on Options Push"),
            onOptionPress===true;}} //samething is to be done + set on press to false
        name='dots-three-vertical'
        size={20}
        //color={color.FONT_MEDIUM}
        style={{ padding: 10 }}
    />
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
});
