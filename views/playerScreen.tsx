import React, {FC, useRef} from "react";
import { View, Text, StyleSheet,Dimensions, ActivityIndicator, Image} from "react-native";
import {connect} from "react-redux";
//import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import * as Components from '../components/index';
import * as ActionTypes from "../store/actionTypes";
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe";
import {useState, useCallback, useEffect} from 'react';
import Playlist from "../models/Playlist";
import Song from "../models/Song";
import { Alert } from "react-native";
import BackButton from "../components/BackButton";

const { width } = Dimensions.get('window');

const PlayerScreen = (props) => {
  


  //const [currentSong, setCurrentSong] = useState<Song>();
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

   useEffect(() =>{
     if(props.currSong && Object.keys(props.currSong).length === 0 && props.currSong.constructor === Object) props.setCurrSong(props.currPlaylist.Songs[0])
    
   },[]) 


   const onStateChange = useCallback((state) => {
    console.log(state)
    if (state === "ended") {
      nextSong()
      Alert.alert("video has finished playing!");
    }
  }, []);



   const nextSong = () => {
     const playlist: Playlist = props.currPlaylist
     let SongIndex: number = playlist.Songs.findIndex((Song: Song) => Song.videoid === props.currSong?.videoid);
     if(SongIndex === playlist.Songs.length-1) SongIndex = -1 
     props.setCurrSong(playlist.Songs[SongIndex+1])
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
    let SongIndex: number = playlist.Songs.findIndex((Song: Song) => Song.videoid === props.currSong?.videoid);
    if(SongIndex === 0) SongIndex = playlist.Songs.length;
    props.setCurrSong(playlist.Songs[SongIndex-1])
    setPlaying(false);
    setIsLoadingVideo(true);
    setTimeout(() => {
      setPlaying(true);
      setIsLoadingVideo(false);
    }, 1000)
    //togglePlaying();
    //togglePlaying();
     
  }
  const playerRef = useRef<YoutubeIframeRef | null>(null);
  const [sliderValue,setSliderValue] = useState(0); 
  const [time,setTime] = useState("00:00/00:00");
  useEffect(() => {
    const interval = setInterval(async () => {
      const elapsed_sec = await playerRef.current?.getCurrentTime(); // this is a promise. dont forget to await
      const duration = await playerRef.current?.getDuration();
      // calculations
      const elapsed_ms = Math.floor(elapsed_sec * 1000);
      const min = Math.floor(elapsed_ms / 60000);
      const seconds = Math.floor((elapsed_ms - min * 60000) / 1000);
      const duration_ms = Math.floor(duration * 1000);
      const durationMin = Math.floor(duration_ms / 60000);
      const durationSeconds = Math.floor((duration_ms - durationMin * 60000) / 1000);

      setTime(`${min.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}/${durationMin.toString().padStart(2, '0')}:${durationSeconds.toString().padStart(2, '0')}`)
      const v  = (elapsed_ms/duration_ms);
      setSliderValue(Number.isNaN(v) || !Number.isFinite(v) ? 0: v);
      //setSliderValue((v === NaN ? 0 : v))
    }, 500); // 100 ms refresh. increase it if you don't require millisecond precision

    return () => {
      clearInterval(interval);
    };
  }, []);
    return (
 <View style={styles.container}>
   <View style = {styles.youtubeVideo}>
   <YoutubePlayer
        ref = {playerRef}
        height={200}
        play={playing} 
        onChangeState = {onStateChange}
        videoId={props.currSong?.videoid === undefined ? "" : props.currSong.videoid} //new video
      />
    </View>
           <BackButton  onPress = {()=>gotoSongList()} />

<View style={styles.midContainer}>

            
        {/* <MaterialCommunityIcons
            name='music-circle'
            size={300}
            color={context.isPlaying ? color.ACTIVE_BG : color.FONT_MEDIUM} /> */}
            
        <Image source = {{uri:props.currSong?.thumbnail}}
         style={styles.image} />   

        <Text style={styles.audioTitle}> {props.currSong?.title} </Text>
        {/* <Text numberOfLines={1} style={styles.audioTitle}>
        {context.currentAudio.filename} </Text>  */}

</View> 
<View style={styles.audioPlayer}>
  <Text style ={{justifyContent: "center"}}>{time}</Text>

        <Slider
            style={{ width: width, height: 40, }}
            thumbTintColor="rgb(241, 126, 58)"
            maximumTrackTintColor="rgb(241, 126, 58)"
            minimumTrackTintColor="rgb(241, 126, 58)"
            minimumValue={0}
            maximumValue={1}
           value={sliderValue}
           // minimumTrackTintColor={color.FONT_MEDIUM} 
           // maximumTrackTintColor={color.ACTIVE_BG}
          />
 <ActivityIndicator /> 
<View style={styles.audioBtn}>

            <Components.PlayerBtn iconType='PREV' onPress={()=> prevSong()}  />
            {isLoadingVideo ? <ActivityIndicator style={{ marginHorizontal: 25 }} size="large" color="#ffffff"/> :
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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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