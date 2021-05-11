import React, {FC} from "react";
import { View, Text, StyleSheet,Dimensions, ActivityIndicator, Image} from "react-native";
import {connect} from "react-redux";
//import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import * as Components from '../components/index';
import * as ActionTypes from "../store/actionTypes";
import YoutubePlayer from "react-native-youtube-iframe";
import {useState, useCallback, useEffect} from 'react';
import Playlist from "../models/Playlist";
import Song from "../models/Song";
import { Alert } from "react-native";
import BackButton from "../components/BackButton";

const { width } = Dimensions.get('window');

const PlayerScreen = (props) => {
  

  const [currentSong, setCurrentSong] = useState<Song>();
  const [isLoadingVideo,setIsLoadingVideo] = useState<boolean>(false);
  const gotoSongList = () => {
    props.navigation.navigate("songList"); };

    const [playingButton, setPlayingButton] = useState(true);
    const [playing, setPlaying] = useState(true);
    const togglePlaying = useCallback(() => {
      setPlayingButton((prev) => !prev);
      setPlaying((prev) => !prev)

    }, []);

    
  
 
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
        currlaylist.Songs[0]ndObj: status,
        isPlaying: falplaying
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
   const onStateChange = useCallback((state) => {
    console.log(state)
    if (state === "ended") {
      nextSong()
      Alert.alert("video has finished playing!");
    }
  }, []);


   useEffect(() => {
     const playlist : Playlist = props.currPlaylist
     setCurrentSong(playlist.Songs[0])

   }, [])

   const nextSong = () => {
     const playlist: Playlist = props.currPlaylist
     const SongIndex: number = playlist.Songs.findIndex((Song: Song) => Song.videoid === currentSong?.videoid);
     setCurrentSong(playlist.Songs[SongIndex+1])
     setPlaying(false);
     setIsLoadingVideo(true);
     setTimeout(() => {
       setPlaying(true);
       setIsLoadingVideo(false);
     }, 1000)
     //togglePlaying();
     //togglePlaying();
   } 
   const prevSong = () => {
    const playlist: Playlist = props.currPlaylist;
    const SongIndex: number = playlist.Songs.findIndex((Song: Song) => Song.videoid === currentSong?.videoid);
    setCurrentSong(playlist.Songs[SongIndex-1])
    setPlaying(false);
    setIsLoadingVideo(true);
    setTimeout(() => {
      setPlaying(true);
      setIsLoadingVideo(false);
    }, 1000)
    //togglePlaying();
    //togglePlaying();
     
  }

 
    return (
 <View style={styles.container}>
   <View style = {styles.youtubeVideo}>
   <YoutubePlayer
        height={1}
        play={playing} 
        onChangeState = {onStateChange}
        videoId={currentSong?.videoid === undefined ? "" : currentSong.videoid} //new video
      />
    </View>
           <BackButton  onPress = {()=>gotoSongList()} />

<View style={styles.midContainer}>

            
        {/* <MaterialCommunityIcons
            name='music-circle'
            size={300}
            color={context.isPlaying ? color.ACTIVE_BG : color.FONT_MEDIUM} /> */}
            
        <Image source = {{uri:currentSong?.thumbnail}}
         style={styles.image} />   

        <Text style={styles.audioTitle}> {currentSong?.title} </Text>
        {/* <Text numberOfLines={1} style={styles.audioTitle}>
        {context.currentAudio.filename} </Text>  */}

</View> 
<View style={styles.audioPlayer}>
    
        <Slider
            style={{ width: width, height: 40, }}
            thumbTintColor="rgb(241, 126, 58)"
            maximumTrackTintColor="rgb(241, 126, 58)"
            minimumTrackTintColor="rgb(241, 126, 58)"
            minimumValue={0}
            maximumValue={1}
           // value={calculateSeebBar()}
           // minimumTrackTintColor={color.FONT_MEDIUM} 
           // maximumTrackTintColor={color.ACTIVE_BG}
          />
 <ActivityIndicator /> 
<View style={styles.audioBtn}>

            <Components.PlayerBtn iconType='PREV' onPress={()=> prevSong()}  />
            {isLoadingVideo ? <ActivityIndicator  size="large" color="#000000"/> :
            <Components.PlayerBtn 
              //onPress={handlePlayPause}
              onPress={togglePlaying}
              style={{ marginHorizontal: 25 }}
              iconType={playingButton ? 'PLAY' : 'PAUSE'}
            />}
            <Components.PlayerBtn  iconType='NEXT' onPress={()=> nextSong()} />



</View>
</View>   

</View>
    );
};



export default PlayerScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(34, 39, 63)',
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
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF'
      }, 
    audioBtn: {
        width:width,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 20,

    },
    youtubeVideo: {
      height:0,
      opacity: 0.99
    },
    image: {
      margin: 15,
      width: 200, 
      height: 200,
      borderRadius: 10
    },
});