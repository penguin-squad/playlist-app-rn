// Updates Store
import * as ActionTypes from "./actionTypes";
import Playlist from "../../models/Playlist";

const INTIAL_STATE = {
    playlists: [],
    playlistID: "1",
    currPlaylist: []
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

       case ActionTypes.PLAYLIST.DELETE_SONG:
           console.log("playlistReducer: delete song now");
       //console.log(state, action.payload)
        return{
            ...state, 
            playlists: state.playlists.map((playlist: Playlist) => {
                if(playlist.id  == action.payload.id){
                    return {
                        ...playlist,
                        Songs: [...playlist.Songs.filter(x=> x.videoid != action.payloads.videoid)]
                    }
                }else {
                    return playlist
                }
            })
        };

        case ActionTypes.PLAYLIST.UPDATE_PLAYLIST_ID:
            console.log("actions", action.payload)
            return {
                ...state,
                playlistID: action.payload
            };
        
        case ActionTypes.PLAYLIST.UPDATE_CURR_PLAYLIST:
            return {
                ...state,
                currPlaylist: action.payload
            }
        case ActionTypes.PLAYLIST.GET:
            return {
                ...state,
                playlists: action.payload
            }



        default:
            return state;
        

    }
};

export { playlistReducer };
