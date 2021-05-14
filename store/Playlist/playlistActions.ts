import { PLAYLIST } from "./actionTypes";
import  Playlist  from "../../models/Playlist";
import firestore from '@react-native-firebase/firestore';
import Song from "../../models/Song";
import * as LOADING from "../Loading/actionTypes";

let unsubscribe = () => {};

export const createPlaylist = (Playlist: Playlist) => {
    return async (dispatch: any, getState: any) => {
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
    return async (dispatch: any, getState: any) => { 
        unsubscribe();
        dispatch({type: LOADING.LOADING, payload: true})
        dispatch({type: PLAYLIST.UPDATE_PLAYLIST_ID, payload: playlistID })
        console.log("I Am ABLE TO GET HERE")
        try{
        unsubscribe = await firestore()
        .collection('Playlists')
        .doc(playlistID)
        .onSnapshot((doc) => {
            console.log("Updating my Data in Playlist: ",doc.data())
            dispatch({type: PLAYLIST.UPDATE_CURR_PLAYLIST, payload: doc.data()})
        })
        dispatch({type: LOADING.LOADING, payload: false})
        }catch(e){
            console.log("Clearly an Error: " ,e)
        dispatch({type: LOADING.LOADING, payload: false})
        }
        //unsubscribe();
    }
 
}

export const getPlaylists = (userId: string) => {
    return async (dispatch: any, getState: any) => {
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
    return async (dispatch: any, getState: any) => {
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

export const deleteSong = (playlistId: string, Song: Song) => {
    return async (dispatch: any, getState: any) => {
        try{
            firestore()
            .collection('Playlists')
            .doc(playlistId)
            .update({
                Songs: firestore.FieldValue.arrayRemove(Song)
         })
        }catch(e){
            console.log(e)
        }
    }
}

export const deletePlaylist = (playlistId:string) => {
    return async (dispatch: any, getState: any) => {
        try{
            firestore()
            .collection('Playlists')
            .doc(playlistId)
            .delete()
                .then(() => {
                dispatch({type: PLAYLIST.DELETE_PLAYLIST, payload: playlistId}) 
                console.log('Playlist deleted!');
              });
        }catch (e){
            console.log(e)
        }
    }
}
