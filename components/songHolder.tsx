import React, {FC} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Image, Animated,TouchableOpacity } from "react-native";
import  Entypo  from 'react-native-vector-icons/Entypo';
import Swipeable from "react-native-gesture-handler/Swipeable";
import  { deleteSong }  from "../store/Playlist/playlistActions";
import Song from '../models/Song' 

const { width } = Dimensions.get('window'); 

const RightActions = ({progress, dragX, onPress})=>{
    const scale= dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1,0],
        extrapolate: 'clamp',
    });

    return (
     <TouchableOpacity onPress={onPress}>
       <View style={styles.rightAction} >
            <Animated.Text style={[styles.actionText, {transform : [{scale}] }]}> 
                Delete 
            </Animated.Text>
        </View>
        </TouchableOpacity>  
    );
};

interface Props{
    Song: Song;
   //setShowResults: (value: boolean) => void;
    deleteSongFromPlaylist: (PlaylistId: string, Song: Song) => void;
    playlistId: string;
    title: string;
    onAudioPress: boolean;
    activeSong: boolean;
    thumbnail: string;
    isPlaying: boolean; 
    videoid: string;
    duration: string;
    isOwner: () => boolean;
  
  }

 
const SongHolder =(props: Props) => {    

const { title, duration, onAudioPress, activeSong, thumbnail,isPlaying, videoid, playlistId, Song, isOwner} = props;

const deleteSong = () => {
     props.deleteSongFromPlaylist(playlistId, Song); 
    }; 

 return (
<>
<Swipeable enabled={isOwner()}
    renderRightActions={(progress, dragX) => (
    <RightActions progress={progress} dragX={dragX} onPress={deleteSong} />
    )} >

<View style={styles.container}>
{/* <TouchableWithoutFeedback onPress={()=>onAudioPress}>     */}
<TouchableWithoutFeedback key={title}  onPress={onAudioPress}>                      
<View style={styles.leftContainer}>
  <View style={[ styles.smallPic, {
      backgroundColor: activeSong ? "rgba(81,135,200,1)" : "black", //color.ACTIVE_BG && color.FONT_LIGHT 
   
    }, ]} >

  <Image source = {{uri: thumbnail}}
      style={styles.image} />
  </View>  

<View style={styles.titleContainer}>
<Text numberOfLines={1} style={styles.titleText}>  {title}  </Text>
</View>
</View>
</TouchableWithoutFeedback>

<View style={styles.rightContainer}>

    <Text style={{ padding: 10, color: "white"}}> {"3.3"} </Text> 
    {/* TODO: duration use */}
</View>
</View>
<View style={styles.separator}> 
</View>
</Swipeable>
</>
    );
};

export default SongHolder;

const styles = StyleSheet.create({
    container: {
        // justifyContent: "center",
        //alignItems: "center",
        flexDirection: 'row',
        alignSelf: 'center',
        width: width /1.1 ,
        backgroundColor: 'rgb(48,56,87)',
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex:1,
    },
    rightContainer: {
        flexBasis: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    smallPic:{ //Tumbnail
        height: 50,
        flexBasis: 50,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
    smallPicText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white", 
 
    },
    titleContainer: {
        width: width -180,
        paddingLeft:10,
    },
    titleText: {
        fontSize: 16,
        color: "white", 
    },
    timeText: {
        fontSize: 14,
        color: "white", //TODO: is not visible. shorten the name
    },
    separator:{
        width: width - 80,
        backgroundColor: '#333',
        opacity: 0.3,
        height: 0.5,
        alignSelf: 'center',
        marginTop: 10,
    },
    image: {
        margin: 5,
        width: 40, 
        height: 40,
        borderRadius: 50
      },
     actionText:{
        color:"#fff",
        fontWeight:"600",
        padding: 20,
     }, 
     rightAction:{
        backgroundColor: "#dd2c00",
        justifyContent: "center",
        flex: 1,
       // alignItems:"flex-end",
     }, 
});
