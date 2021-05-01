import React, { FC , useState } from "react";
import { Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Song from '../models/Song' 
import SongSearchResult from "../models/SongSearchResult";
import { PLAYLIST } from "../store/Playlist/actionTypes";
import Playlist from '../models/Playlist'
import { addSong } from "../store/Playlist/playlistActions";
const { width } = Dimensions.get("screen");

interface Props{
  Song: SongSearchResult;
  setShowResults: (value: boolean) => void;
  addSongToPlaylist: (Song: Song, playlistID: string) => void;
  playlistID: string;

}
const SearchResultsItem = (props: Props) => {
  console.log(props)
  const {title, thumbnail, duration,videoid} = props.Song;

  const addToPlaylist = () => {
    const Song: Song = {title,thumbnail,duration,videoid}
    props.addSongToPlaylist(Song,props.playlistID)
    props.setShowResults(false);

  }

  return (
  <TouchableOpacity style = {styles.container} onPress = {addToPlaylist}>
      <Image source = {{uri: thumbnail}}
      style = {styles.image}/>
      <Text style = {styles.title}>{title.length > 35 ? title.substr(0,35)+'...': title}</Text>
      <Text>{duration}</Text>
  </TouchableOpacity>
    );
};


const mapStateToProps = (state) => ({ playlistID: state.playlistReducer.playlistID });

const mapDispatchToProps = (dispatch) => ({
    addSongToPlaylist: (Song: Song, PlaylistID: string) => dispatch(addSong(PlaylistID,Song))
});
const connectComponent = connect (mapStateToProps, mapDispatchToProps);
export default connectComponent(SearchResultsItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    borderBottomColor:"#B8B9B8",
    borderStyle: "solid",
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20
  },
  image: {
    margin: 5,
    width: 40, 
    height: 40,
    borderRadius: 50
  },
  title: {
    alignSelf:"center"
  }
});

