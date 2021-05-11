import React, { FC } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Playlist from '../models/Playlist';
//import {Album} from "../store/album";

const { width, height } = Dimensions.get('screen');

const OneListItem: FC<any>=(props) =>{ 
    console.log(props)
    return (
   
   <View style={styles.container}> 
        <View style={{ ...styles.listItem, alignItems:"flex-start"}}>
            <Text style={styles.buttonText}>{props.name}</Text>
        </View>

        <View style={{ ...styles.listItem, alignItems: "flex-end"}}>           
            <Text style={styles.buttonText}>{props.id}</Text>
        </View>
    </View>    
    );
} ;

export default OneListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 1,
        padding: 10,
        height: height/ 15,        
    },
    listItem: {
        flex: 0.5,
        justifyContent: "center",       
        
    },
    item: {
        padding: 5,
        fontWeight: "600",
        fontSize: 16,
        
    },
    buttonText: {
        color: '#FFF',
      },
});