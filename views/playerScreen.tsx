import React, {FC} from "react";
import { View, Text, StyleSheet,Dimensions } from "react-native";
import {connect} from "react-redux";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import * as Components from '../components/index';
import * as ActionTypes from "../store/actionTypes";

const { width } = Dimensions.get('window');

const PlayerScreen = (props) => {
  
  const gotoSongList = () => {
    props.navigation.navigate("songList"); };
 
 
  /* Functionality: when audio files exist

  const context = useContext(AudioContext);
  const { playbackPosition, playbackDuration } = context; 
 

  // slider moves
  const calculateSeebBar = () => {
    if (playbackPosition !== null && playbackDuration !== null) {
      return playbackPosition / playbackDuration;
    }
    return 0;
  };


  // previous audio
    useEffect(() => {
    context.loadPreviousAudio();
    }, []);

  // play / pause functionality

    const handlePlayPause = async () => {
    // play
    if (context.soundObj === null) {
      const audio = context.currentAudio;
      const status = await play(context.playbackObj, audio.uri);
      return context.updateState(context, {
        soundObj: status,
        currentAudio: audio,
        isPlaying: true,
        currentAudioIndex: context.currentAudioIndex,
      });
    }
    // pause
    if (context.soundObj && context.soundObj.isPlaying) {
      const status = await pause(context.playbackObj);
      return context.updateState(context, {
        soundObj: status,
        isPlaying: false,
      });
    }
    // resume
    if (context.soundObj && !context.soundObj.isPlaying) {
      const status = await resume(context.playbackObj);
      return context.updateState(context, {
        soundObj: status,
        isPlaying: true,
      });
    }
  };
    
   if (!context.currentAudio) return null;
 
 
 */
 
 
 
 
    return (
 <View style={styles.container}>
           {/* TODO: go back button */}
           <Components.PlayerBtn  iconType='BACK' onPress={()=>gotoSongList()} />

<View style={styles.midContainer}>

            
        <MaterialCommunityIcons
            name='music-circle'
            size={300}
            /*color={context.isPlaying ? color.ACTIVE_BG : color.FONT_MEDIUM} */ />
            
        <Text style={styles.audioTitle}> {props.album.albumname} </Text>
        {/* <Text numberOfLines={1} style={styles.audioTitle}>
        {context.currentAudio.filename} </Text>  */}

</View> 
<View style={styles.audioPlayer}>
    
        <Slider
            style={{ width: width, height: 40 }}
            minimumValue={0}
            maximumValue={1}
           // value={calculateSeebBar()}
           // minimumTrackTintColor={color.FONT_MEDIUM}
           // maximumTrackTintColor={color.ACTIVE_BG}
          />

<View style={styles.audioBtn}>

            <Components.PlayerBtn iconType='PREV' onPress={()=>console.log("<<")}  />
            <Components.PlayerBtn 
              //onPress={handlePlayPause}
              onPress={()=>console.log("Btn presed")}
              style={{ marginHorizontal: 25 }}
              //iconType={context.isPlaying ? 'PLAY' : 'PAUSE'}
              iconType='PAUSE'
            />
            <Components.PlayerBtn  iconType='NEXT' onPress={()=>console.log(">>")} />



</View>
</View>   

</View>
    );
};

// Redux code starts
const mapStateToProps = (state) => ({ album: state.album});
const mapDispatchToProps = (dispatch) => ({

});

const connectComponent= connect (mapStateToProps, mapDispatchToProps);
export default connectComponent(PlayerScreen);
// Redux code ends



const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
    },
    midContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    audioPlayer:{
        //
    },
    audioTitle: {
        //padding: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color: "rgb(0, 0, 0)"
      }, 
    audioBtn: {
        width:width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,

    } 
});