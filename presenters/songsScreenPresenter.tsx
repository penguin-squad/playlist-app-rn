import { View, Text, StyleSheet, FlatList , TouchableOpacity, Dimensions} from "react-native";
import {connect, RootStateOrAny} from "react-redux";
import SongSearchResult from "../models/SongSearchResult";
import { SongsScreen } from "../views";
import { deleteSong } from "../store/Playlist/playlistActions";
import Song from '../models/Song'

const { width } = Dimensions.get('screen');

const mapStateToProps = (state: any) => ({ 
    playlistID: state.playlistReducer.playlistID,
    playlists: state.playlistReducer.playlists,
    currPlaylist: state.playlistReducer.currPlaylist 

  });
  
  // const mapDispatchToProps = (dispatch: any) => ({
  //     /*addAlbum: (albumname) => 
  //       dispatch({
  //           type: ActionTypes.ADD_PLAYLIST, 
  //           payload: {
  //           albumname,
  //     }}),*/
  // });

  const mapDispatchToProps = (dispatch: any) => ({
    deleteSongFromPlaylist: (Song: Song, PlaylistID: string) => dispatch(deleteSong(PlaylistID,Song))
});

  const connectComponent= connect (mapStateToProps, mapDispatchToProps);

  export default connectComponent(SongsScreen);
 