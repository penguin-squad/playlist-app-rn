import { View, Text, StyleSheet, FlatList , TouchableOpacity, Dimensions,ScrollView, ToastAndroid} from "react-native";
import {connect} from "react-redux";
import Playlist from '../models/Playlist'
import {createPlaylist, changePlaylistID, getPlaylists} from '../store/Playlist/playlistActions'
import { PlayListsCollectionScreen } from "../views";
const { width } = Dimensions.get('screen');


const mapStateToProps = (state: any) => ({ 
    playlists: state.playlistReducer.playlists,
    playlistID: state.playlistReducer.playlistID,
    user: state.userReducer.user
  
  });
  
  const mapDispatchToProps = (dispatch: any) => ({ //TODO: ADD TO LISTS
      addPlaylist: (playlist: Playlist) => dispatch(createPlaylist(playlist)),
      changePlaylistID: (playlistID: string) => dispatch(changePlaylistID(playlistID)),
      getPlaylists: (userId: string) => dispatch(getPlaylists(userId))
      });
  const connectComponent = connect (mapStateToProps, mapDispatchToProps);
  export default connectComponent(PlayListsCollectionScreen);
  
