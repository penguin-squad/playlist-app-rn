import {connect} from "react-redux";
import Song from "../models/Song";
import PlayerScreen  from "../views/playerScreen";
import * as ActionTypes from '../store/Playlist/actionTypes'


const mapStateToProps = (state: any) => ({ 
    playlists: state.playlistReducer.playlists,
    playlistID: state.playlistReducer.playlistID,
    currPlaylist: state.playlistReducer.currPlaylist,
    currSong: state.playlistReducer.currSong
  });
  

  const mapDispatchToProps = (dispatch: any) => ({
    setCurrSong: (song: Song) => 
    dispatch({
      type: ActionTypes.PLAYLIST.SET_CURR_SONG,
      payload: song
    })
  });

  const connectComponent= connect (mapStateToProps,mapDispatchToProps);
  export default connectComponent(PlayerScreen);