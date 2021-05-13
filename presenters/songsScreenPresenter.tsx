import { View, Text, StyleSheet, FlatList , TouchableOpacity, Dimensions} from "react-native";
import {connect, RootStateOrAny} from "react-redux";
import SongSearchResult from "../models/SongSearchResult";
import { SongsScreen } from "../views";
import SongHolder from "../components/songHolder";
import { deleteSong } from "../store/Playlist/playlistActions";
import Song from '../models/Song'

const { width } = Dimensions.get('screen');

const mapStateToProps = (state: any) => ({ 
    playlistID: state.playlistReducer.playlistID,
    playlists: state.playlistReducer.playlists,
    currPlaylist: state.playlistReducer.currPlaylist 

  });
  


  const mapDispatchToProps = (dispatch: any) => ({
    deleteSongFromPlaylist: (PlaylistId: string, Song: Song) => dispatch(deleteSong(PlaylistId,Song))
});

  const connectComponent= connect (mapStateToProps, mapDispatchToProps);

  export default connectComponent(SongsScreen);
 