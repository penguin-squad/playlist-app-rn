// Updates Store
import * as ActionTypes from "./actionTypes";

/*

currentPlaylist: Playlist //the currently selected album
Playlists: Playlist[] //all playlists Local View based changes are fine however larger store
Playlist: Song[]



*/

const initialState= {
    album: { //test for songScreen 
        albumname:"Happy Coding",
    },

    firstPlaylist: { //test for playListCollectionScreen 
        name: "Happy coding",
        id : "htpps://.."
    },
    song: { 
        title:"Rivers",
        duration: 2.05,
        onOptionPress: true, // when to delete song
        onSongPress: true, 
        activeSong: false,
        isPlaying: false,
    },
    songslist: [
        { 
            title:"Rivers",
            duration: 2.05,
            onOptionPress: true, // when to delete song
            onAudioPress: true, 
            activeSong: false,
            isPlaying: false,
        },
        { 
            title:"Here comes the sun",
            duration: 1.35,
            onOptionPress: true, // when to delete song
            onAudioPress: true, //on song click
            activeSong: true,
            isPlaying: false,
        },
        { 
            title:"We are the champions",
            duration: 3.05,
            onOptionPress: false, // when to delete song
            onAudioPress: false, 
            activeSong: false,
            isPlaying: true,
        },

    ],

    // playlists: [   
    //     {
    //         id: "1",
    //         name: "Study",  
    //       },
    //       {
    //        id: "2",
    //        name: "Chill",   
    //       },
    // ],

    playlist: [
            {
                id: 1,
                name: "Study",  
              },
            {
                id: 2,
                name: "Code",   
            },  
        ],
     
    
    //next object 
 
};

const reducer = (state = initialState, action:any) => {
    switch(action.type){
       case ActionTypes.ADD_PLAYLIST: //test, delete later
        return{
            ...state, 
            album: {...state.album, albumname: action.payload.albumname},
        };
       
       case ActionTypes.NEW_PLAYLIST:  //TODO
           return{
               //...state,
              // playlist: {...state.firstPlaylist, plname: action.payload.plname, plurl: action.payload.plurl},
             ...state, playlist: action.payload.albums
           };

        default:
            return state;

    }
};

export {reducer};
