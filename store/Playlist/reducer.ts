// Updates Store
import * as ActionTypes from "./actionTypes";
import IAppState from '../IAppState'
import Playlist from "../../models/Playlist";

const INTIAL_STATE = {
    playlists: [],
    playlistID: "1"
}

const playlistReducer = (state: any = INTIAL_STATE, action:any) => {
    switch(action.type){
       case ActionTypes.PLAYLIST.CREATE: //test, delete later
        return{
            ...state, 
            playlists: [...state.playlists, action.payload],
        };
        case ActionTypes.PLAYLIST.ADD_SONG: //test, delete later
        console.log(state, action.payload)
        return{
            ...state, 
            playlists: state.playlists.map((playlist: Playlist) => {
                if(playlist.id  == action.payload.id){
                    return {
                        ...playlist,
                        Songs: [...playlist.Songs, action.payload.Song]
                    }
                }else {
                    return playlist
                }
            })
        };
        default:
            return state;

    }
};

export { playlistReducer };
