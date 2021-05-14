import React, { FC , useState } from "react";
import {View, StyleSheet, Dimensions, FlatList } from "react-native";
import Song from '../models/Song';
import '../components/SearchResultsItem'
import SongSearchResult from "../models/SongSearchResult";
import SearchResultsItemPresenter from "../presenters/SearchResultsItemPresenter";

const { width, height } = Dimensions.get('screen');

interface Props{
    Songs: SongSearchResult[];
    setShowResults: (value: boolean) => void;

}

const SearchResults = ({Songs, setShowResults}: Props) => {
console.log(Songs)
 return (
  <View style={styles.list}>
      <FlatList
      data = {Songs} 
      keyExtractor = {(Song => Song.videoid)}
      renderItem = {({item}) => <SearchResultsItemPresenter Song = {item} setShowResults = {setShowResults}/>} />

  </View>
    );
};

export default SearchResults;

const styles = StyleSheet.create({
    list: {
         backgroundColor: 'rgb(48,56,87)',
         height:height/2.3,
         
    },  
});    