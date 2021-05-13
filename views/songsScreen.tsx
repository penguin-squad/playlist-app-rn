import React, {FC, useState, useEffect,useRef} from "react";
import { View, Text, StyleSheet, FlatList , TouchableOpacity, Dimensions, Alert} from "react-native";
import * as Components from '../components/index';
import {connect} from "react-redux";
import * as ActionTypes from "../store/actionTypes";
import Youtube from '../util/YoutubeAPI/Youtube'
import SearchResults from '../components/SearchResults';
import Song from '../models/Song'
import SongSearchResult from "../models/SongSearchResult";
import { PLAYLIST } from '../store/Playlist/actionTypes'
import Playlist from "../models/Playlist";
import { addSong } from "../store/Playlist/playlistActions";
import BackButton from "../components/BackButton";
import Swipeable from "react-native-gesture-handler/Swipeable";

const { width, height } = Dimensions.get('screen');

// interface Props{

//   deleteSongFromPlaylist: (Song: Song, playlistID: string) => void;
//   playlistID: string;
 
// }


const fakedata = {
  "kind": "youtube#searchListResponse",
  "etag": "82HG6jmjBB-sjVT_2loLezG1mWY",
  "nextPageToken": "CAUQAA",
  "regionCode": "SE",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "SE9whG3WQ0VcUiupU1SNLSwszGA",
      "id": {
        "kind": "youtube#video",
        "videoId": "HUZjUl8HTy4"
      },
      "snippet": {
        "publishedAt": "2020-12-07T14:28:44Z",
        "channelId": "UCE5OKyfB1ZnuroaQQzlRGvw",
        "title": "Where&#39;s Chicky? Funny Chicky 2020 | CHICKEN FAIL | Chicky Cartoon in English for Kids",
        "description": "Subscribe and discover new videos every week → http://bit.ly/ChickyEN Welcome to Chicky's official YouTube channel! Where's Chicky? Funny Chicky 2020 ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/HUZjUl8HTy4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/HUZjUl8HTy4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/HUZjUl8HTy4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Where's Chicky? - Cartoon in English",
        "liveBroadcastContent": "none",
        "publishTime": "2020-12-07T14:28:44Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "8Z20SwGFuSt3UqfBoXJt0zuAI-k",
      "id": {
        "kind": "youtube#video",
        "videoId": "msSc7Mv0QHY"
      },
      "snippet": {
        "publishedAt": "2013-11-06T16:52:15Z",
        "channelId": "UCpIMOJmLiDq8ikUzrjezMIA",
        "title": "J.Geco - Chicken Song",
        "description": "https://youtu.be/8S9z09_ZaEQ TECHNO CHICKEN SIMULATOR? CLUB CHICKEN (Episode 1) https://youtu.be/a34xtL1PeOo TRAP CHICKEN (Ep.2) ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/msSc7Mv0QHY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/msSc7Mv0QHY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/msSc7Mv0QHY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "J. Geco",
        "liveBroadcastContent": "none",
        "publishTime": "2013-11-06T16:52:15Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "Lz0IlwJL9tSQjgNYtaw0vWIKdtg",
      "id": {
        "kind": "youtube#video",
        "videoId": "M6XiFKB7j0w"
      },
      "snippet": {
        "publishedAt": "2017-10-01T15:00:50Z",
        "channelId": "UCpko_-a4wgz2u_DgDgd9fqA",
        "title": "$17 Fried Chicken Vs. $500 Fried Chicken",
        "description": "Word to the bird.” Check out more awesome videos at BuzzFeedVideo! https://bit.ly/YTbuzzfeedvideo https://bit.ly/YTbuzzfeedblue1 https://bit.ly/YTbuzzfeedviolet ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/M6XiFKB7j0w/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/M6XiFKB7j0w/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/M6XiFKB7j0w/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "BuzzFeedVideo",
        "liveBroadcastContent": "none",
        "publishTime": "2017-10-01T15:00:50Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "bbYSyiRe-wjmhr5_6C4zrhc0oUY",
      "id": {
        "kind": "youtube#video",
        "videoId": "TA7FecCAWS0"
      },
      "snippet": {
        "publishedAt": "2021-03-09T23:13:16Z",
        "channelId": "UCwQPlOozCz_9ulhZ141askg",
        "title": "The Best Oven Baked Chicken and Rice EVER!!! | Baked Chicken Recipe",
        "description": "This is a good baked chicken recipe, you could make this a one pot chicken and rice meal for the family. I'm going to try this as a chicken and rice casserole ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/TA7FecCAWS0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/TA7FecCAWS0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/TA7FecCAWS0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Ray Mack's Kitchen and Grill",
        "liveBroadcastContent": "none",
        "publishTime": "2021-03-09T23:13:16Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "0XsasXWKIGcOETtMZAQyUZGOoiM",
      "id": {
        "kind": "youtube#video",
        "videoId": "3CVDrAkhDmI"
      },
      "snippet": {
        "publishedAt": "2020-02-29T04:00:02Z",
        "channelId": "UCag-EyNSpMbuF5YeQ_qTGaQ",
        "title": "KFC style Fried Chicken Recipe by Tiffin Box | Kentucky Fried Chicken, Spicy Crispy chicken fry",
        "description": "Hello everyone ! today's recipe is perfect KFC style Fried Chicken recipe in a homemade version. I hope u guys will like this easy and delicious chicken fry recipe ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/3CVDrAkhDmI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/3CVDrAkhDmI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/3CVDrAkhDmI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Tiffin Box",
        "liveBroadcastContent": "none",
        "publishTime": "2020-02-29T04:00:02Z"
      }
    }
  ]
}



const SongsScreen =(props) => {
  console.log("Songs Screen",props)
  
  const gotoPlayLists = () => {
    props.navigation.navigate("playlists"); };
  
  const goToPlayer = () => {
    props.navigation.navigate("player"); };
  
  const firstRender = useRef(true);
  
  //Gets data from APi
  const [newSongSearch, setNewSongSearch]= useState <string>(""); 
  const [searchResults, setSearchResults] = useState<SongSearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<Boolean>(false);

  useEffect(() => {
    if(firstRender.current == true){
      firstRender.current = false
      return
    }
    
    const Search = setTimeout(() => {
      // Youtube.searchYoutubeVideo(newSongSearch)
      // .then(data => {
      //   const SearchResults: Song[] = data.items.map((item: any) => {
      //   return {
      //     videoid: item.id.videoId,
      //     title: item.snippet.title, 
      //     duration: item.snippet.duration,
      //     thumbnail: item.snippet.thumbnails.default.url 
      //     }
      //   })
      //   setSearchResults(SearchResults)
      //   setShowSearchResults(true);
      // })
      // .catch(e => console.log(e))
      // setSearchResults(res)
       const SearchResults: SongSearchResult[] = fakedata.items.map((item: any) => {
        return {
          videoid: item.id.videoId,
          title: item.snippet.title, 
          duration: item.snippet.duratiouserReducern,
          thumbnail: item.snippet.thumbnails.default.url 
          }
      })
      setSearchResults(SearchResults)
      setShowSearchResults(true);
    }, 1000)
    return () => clearTimeout(Search)
  },[newSongSearch]) 


  return (
    <>
    <View style={styles.container}>
      <View style ={styles.backBtn}>
        <BackButton  onPress = {()=>gotoPlayLists()} />
      </View>

      <View style={styles.header}>
       <Components.Header title= {"Playlist: "+ props.currPlaylist.name}/> 
      </View>

      <View>
       <Components.PlainInput 
        onChangeText={(text) => setNewSongSearch(text)} 
        placeholder="Search for new song to add"/> 
      </View>  

      <View style ={styles.list}> 
      <FlatList style={{ marginVertical: 10, display: showSearchResults == false ? "flex" : "none"}}
        data={props.currPlaylist.Songs}
        keyExtractor={(item)=>item.title}
        showsVerticalScrollIndicator={true}
        renderItem={({item})=> (
      
      <Components.SongHolder
        title={item.title}
        duration={item.duration}
       // onOptionPress={item.onOptionPress}
        onAudioPress={item.onAudioPress}
        activeSong={item.activeSong}
        isPlaying={item.isPlaying}
        thumbnail={item.thumbnail}
        videoid={item.videoid}
        playlistId={props.playlistID}
        Song={item}
        deleteSongFromPlaylist={props.deleteSongFromPlaylist}

      
        />
      )} />
       </View>

<View>
      <View style={{display: showSearchResults == true ? "flex": "none"}}>
          <SearchResults Songs = {searchResults} setShowResults = {setShowSearchResults}/>
      </View>

 </View>       
   </View>
   
  <View style={styles.player}>
    <Components.ButtonFullScreen
          title="Player" 
          onPress={()=>goToPlayer()}/>
  </View> 
</>
    );
};

export default SongsScreen;



const styles = StyleSheet.create({
    container: {
      flex: 0.9,
      paddingVertical: 10,
      alignItems: "center",
      backgroundColor: 'rgb(34, 39, 63)' 
    },
    header: {
      width: width /1,
      height: height/14,
      marginTop: height/70, 
    },
    list: {
      //height:height/1.5,
    },
    backBtn: {
      width: width /1,
      height: 50,
      marginTop: height/30, 
     // position: 'absolute',
    },
    button: {
      width: '50%',
      height: 50,
      alignItems: 'center',
      marginBottom: 15,
      backgroundColor:'rgb(241, 126, 58)',
      //position: 'absolute',
    },
    buttonText: {
      color: '#FFF',
    },
    player: {
    flex: 0.1,
    backgroundColor: 'rgb(34, 39, 63)' ,
    alignItems: "center", 
    paddingVertical: 10,
    justifyContent: "center",
    //position: 'absolute',
    
    }

});