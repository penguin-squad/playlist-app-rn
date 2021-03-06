import { connect } from "react-redux";
import { changePlaylistID } from "../store/Playlist/playlistActions";
import startPage from "../views/startPage";

const mapStateToProps = (state: any) => ({ 
    playlistID: state.playlistReducer.playlistID
  });
  
const mapDispatchToProps = (dispatch: any) => ({ //TODO: ADD TO LISTS
    changePlaylistID: (playlistID: string) => dispatch(changePlaylistID(playlistID))
});

      
const connectComponent = connect (mapStateToProps, mapDispatchToProps);
export default connectComponent(startPage);