import {connect} from "react-redux";
import PlayerScreen  from "../views/playerScreen";


const mapStateToProps = (state: any) => ({ 
    playlists: state.playlistReducer.playlists,
    playlistID: state.playlistReducer.playlistID,
    currPlaylist: state.playlistReducer.currPlaylist
  });
  
  const connectComponent= connect (mapStateToProps);
  export default connectComponent(PlayerScreen);