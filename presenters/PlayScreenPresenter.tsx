import {connect} from "react-redux";


const mapStateToProps = (state) => ({ 
    album: state.reducer.album,
    playlists: state.playlistReducer.playlists,
    playlistID: state.playlistReducer.playlistID,
    currPlaylist: state.playlistReducer.currPlaylist
  });
  
  const connectComponent= connect (mapStateToProps);
  export default connectComponent(PlayerScreen);