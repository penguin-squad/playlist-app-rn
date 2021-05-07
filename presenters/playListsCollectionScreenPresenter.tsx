import { View, Text, StyleSheet, FlatList , TouchableOpacity, Dimensions,ScrollView, ToastAndroid} from "react-native";
import {connect} from "react-redux";
import Playlist from '../models/Playlist'
import {createPlaylist, changePlaylistID, getPlaylists} from '../store/Playlist/playlistActions'
const { width } = Dimensions.get('screen');


const mapStateToProps = (state) => ({ 
    firstPlaylist: state.reducer.firstPlaylist,
    playlists: state.playlistReducer.playlists,
    pl: state.reducer.playlist,
    playlistID: state.playlistReducer.playlistID,
    user: state.userReducer.user
  
  });
  
  const mapDispatchToProps = (dispatch) => ({ //TODO: ADD TO LISTS
      addPlaylist: (playlist: Playlist) => dispatch(createPlaylist(playlist)),
      changePlaylistID: (playlistID: string) => dispatch(changePlaylistID(playlistID)),
      getPlaylists: (userId: string) => dispatch(getPlaylists(userId))
      });
  const connectComponent = connect (mapStateToProps, mapDispatchToProps);
  export default connectComponent(PlayListsCollectionScreen);
  
  
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        //justifyContent: "center",
        paddingVertical: 10,
        alignItems: "center",
      },
  
      listItem: {
          padding: 5,
          backgroundColor: 'rgb(230, 230, 250)',
          width: width / 1.2,
          marginVertical: 2 
      },
    });