import { ActionSheet } from "native-base";
import { View, Text, StyleSheet, FlatList , TouchableOpacity, Dimensions} from "react-native";
import {connect, RootStateOrAny} from "react-redux";
import SongSearchResult from "../models/SongSearchResult";
import { SongsScreen } from "../views";
import * as ActionTypes from '../store/Playlist/actionTypes'
import Song from "../models/Song";
import * as LOADING from "../store/Loading/actionTypes";
import React, {useState, useEffect} from "react";
import Youtube from "../util/YoutubeAPI/Youtube";
const { width } = Dimensions.get('screen');
import { deleteSong } from "../store/Playlist/playlistActions";



const SongScreenPresenter = (props:any) => {
  const [newSongSearch, setNewSongSearch]= useState <string>(""); 
  const [searchResults, setSearchResults] = useState<SongSearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const [loadingSearch, setLoadingSearch] = useState<boolean>(false);

  useEffect(() => {
    const Search = setTimeout(() => {
      if(newSongSearch === "") return
      Youtube.searchYoutubeVideo(newSongSearch)
      .then(data => {
        const SearchResults: Song[] = data.items
        .filter((item: any) => item.id.kind === "youtube#video")
        .map((item: any) => {
        return {
          videoid: item.id.videoId,
          title: item.snippet.title, 
          duration: item.snippet.duration,
          thumbnail: item.snippet.thumbnails.default.url 
          }
        })
        setSearchResults(SearchResults);
        setShowSearchResults(true);
        setLoadingSearch(false);
      })
      .catch(e => console.log(e))
      
      //setSearchResults(res)
      /*const SearchResults: SongSearchResult[] = fakedata.items
       .filter((item: any) => item.id.kind === "youtube#video")
       .map((item: any) => {
        return {
          videoid: item.id.videoId, 
          title: item.snippet.title, 
          duration: item.snippet.duration,
          thumbnail: item.snippet.thumbnails.default.url 
          }
      })
      setSearchResults(SearchResults)
      setShowSearchResults(true);*/
    }, 1000)
    return () => clearTimeout(Search)
  },[newSongSearch]) 




  return <SongsScreen 
  searchResults={searchResults} 
  newSongSearch={newSongSearch}
  setShowSearchResults={setShowSearchResults}
  setNewSongSearch={setNewSongSearch}
  showSearchResults={showSearchResults}
  loadingSearch={loadingSearch}
  setLoadingSearch={setLoadingSearch}
  {...props}
  />
}
const mapStateToProps = (state: any) => ({ 
    playlistID: state.playlistReducer.playlistID,
    playlists: state.playlistReducer.playlists,
    currPlaylist: state.playlistReducer.currPlaylist,
    user: state.userReducer.user,
    loading: state.loadingReducer.loading
  });
  
  const mapDispatchToProps = (dispatch: any) => ({
    setCurrSong: (song: Song) => 
    dispatch({
      type: ActionTypes.PLAYLIST.SET_CURR_SONG,
      payload: song
    }),

    setLoading: (loading: boolean) =>
    dispatch({
      type: LOADING.LOADING,
      payload: loading
    }),
    deleteSongFromPlaylist: (PlaylistId: string, Song: Song) => dispatch(deleteSong(PlaylistId,Song))

  });
  const connectComponent= connect (mapStateToProps, mapDispatchToProps);

  
  export default connectComponent(SongScreenPresenter);
 

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
