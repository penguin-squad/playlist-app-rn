import React, { FC , useState } from "react";
import {View, StyleSheet, Dimensions, FlatList } from "react-native";
import Song from '../models/Song';
import '../components/SearchResultsItem'
import SearchResultsItem from "../components/SearchResultsItem";
import SongSearchResult from "../models/SongSearchResult";
const { width } = Dimensions.get("screen");

interface Props{
    Songs: SongSearchResult[];
    setShowResults: (value: boolean) => void;

}

const SearchResults = ({Songs, setShowResults}: Props) => {
console.log(Songs)
 return (
  <View>
      <FlatList data = {Songs} 
      keyExtractor = {(Song => Song.videoid)}
      renderItem = {({item}) => <SearchResultsItem Song = {item} setShowResults = {setShowResults}/>} />

  </View>
    );
};

export default SearchResults;

const styles = StyleSheet.create({});

