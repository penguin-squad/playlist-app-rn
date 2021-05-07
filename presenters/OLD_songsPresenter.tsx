import {connect} from "react-redux";
import * as ActionTypes from "../store/actionTypes";


 const mapStateToProps = (state) => ({ album: state.album, song: state.song});

    const mapDispatchToProps = (dispatch) => ({
      addAlbum: (albumname) => 
       dispatch({
           type: ActionTypes.ADD_PLAYLIST, 
           payload: {
          albumname,
    },
 }),
 });
 const connectComponent= connect (mapStateToProps, mapDispatchToProps);
 export default connectComponent(Songs);
