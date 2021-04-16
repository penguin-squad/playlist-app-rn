// Updates Store
import * as ActionTypes from "./actionTypes";
import IAppState from '../IAppState'

const INTIAL_STATE ={
    playlists: [],
    user: {}
}

const playlistReducer = (state: IAppState = INTIAL_STATE, action:any) => {
    switch(action.type){
       case ActionTypes.PLAYLIST.CREATE: //test, delete later
        return{
            ...state, 
            playlists: [...state.playlists, action.payload],
        };
        case ActionTypes.PLAYLIST.ADD_SONG: //test, delete later
        return{
            ...state, 
            playlists: state.playlists.map((playlist) => {
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
