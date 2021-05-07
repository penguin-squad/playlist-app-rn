import { PLAYLIST } from "./actionTypes";
import  Playlist  from "../../models/Playlist";
import firestore from '@react-native-firebase/firestore';
import Song from "../../models/Song";

let unsubscribe: () => void;

export const createPlaylist = (Playlist: Playlist) => {
    return async (dispatch, getState) => {
        try{
        const playlist = await firestore()
        .collection('Playlists')
        .add(Playlist)
        dispatch({type: PLAYLIST.CREATE, payload: {...Playlist, id: playlist.id}})
        }catch(e){
            console.log(e);
        }
    }
}

export const changePlaylistID = (playlistID: string) => {
    return async (dispatch, getState) => {
        //if(unsubscribe !== null) unsubscribe()
        dispatch({type: PLAYLIST.UPDATE_PLAYLIST_ID, payload: playlistID })
        try{
        unsubscribe = await firestore()
        .collection('Playlists')
        .doc(playlistID)
        .onSnapshot((doc) => {
            dispatch({type: PLAYLIST.UPDATE_CURR_PLAYLIST, payload: doc.data()})
        })
        
        }catch(e){
            console.log(e)
        }
        
    }
 
}

export const getPlaylists = (userId: string) => {
    return async (dispatch, getState) => {
        try{  
            const playlistsForAUser = await firestore()
            .collection('Playlists')
            .where('userId','==', userId).get()
            let playlists: Playlist[] = [];
            playlistsForAUser.forEach((doc) => {
                const playlistData = doc.data()
                const playlist: Playlist = {id: doc.id, Songs: playlistData.Songs, name: playlistData.name, userId: playlistData.userId}
                playlists = [...playlists, playlist];
            })
            //console.log("all playlist for a user", playlistsForAUser.docs);
            dispatch({type: PLAYLIST.GET, payload: playlists}) 
        }catch(e){
            console.log(e)
        }
    }
}


export const addSong = (playlistId: string, Song: Song) => {
    return async (dispatch, getState) => {
        try{
            firestore()
            .collection('Playlists')
            .doc(playlistId)
            .update({
                Songs: firestore.FieldValue.arrayUnion(Song)
            })

        }catch(e){
            console.log(e)
        }
    }
}

