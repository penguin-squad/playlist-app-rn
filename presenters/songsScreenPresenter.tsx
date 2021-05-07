import { View, Text, StyleSheet, FlatList , TouchableOpacity, Dimensions} from "react-native";
import {connect} from "react-redux";
import SongSearchResult from "../models/SongSearchResult";

const { width } = Dimensions.get('screen');

const mapStateToProps = (state) => ({ 
    album: state.reducer.album, 
    songslist: state.reducer.songslist, 
    playlistID: state.playlistReducer.playlistID,
    playlists: state.playlistReducer.playlists,
    currPlaylist: state.playlistReducer.currPlaylist   
  });
  
  const mapDispatchToProps = (dispatch) => ({
      /*addAlbum: (albumname) => 
        dispatch({
            type: ActionTypes.ADD_PLAYLIST, 
            payload: {
            albumname,
      }}),*/
  });
  const connectComponent= connect (mapStateToProps, mapDispatchToProps);

  export default connectComponent(SongsScreen);

  const Search = setTimeout(() => {
   
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