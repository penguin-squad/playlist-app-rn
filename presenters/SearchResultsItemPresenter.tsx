import { connect } from "react-redux";
import SearchResultsItem from "../components/SearchResultsItem";
import { addSong } from "../store/Playlist/playlistActions";
import Song from '../models/Song'
const mapStateToProps = (state: any) => ({ playlistID: state.playlistReducer.playlistID }); //TODO: Presenter

const mapDispatchToProps = (dispatch: any) => ({
    addSongToPlaylist: (Song: Song, PlaylistID: string) => dispatch(addSong(PlaylistID,Song))
});
const connectComponent = connect (mapStateToProps, mapDispatchToProps);
export default connectComponent(SearchResultsItem); 