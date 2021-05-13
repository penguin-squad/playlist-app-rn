import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import Playlist from '../models/Playlist';
//import {Album} from "../store/album";
import Clipboard from '@react-native-clipboard/clipboard';
const { width, height } = Dimensions.get('screen');

const OneListItem: FC<any>=(props) =>{
    const [copied, setCopied] = useState<boolean>(false);
    console.log(props)
    const copy = () =>{
        setCopied(true);
        Clipboard.setString(props.id);
        setTimeout(()=> setCopied(false),1500)
    }
    return (
   
   <View style={styles.container}> 
        <View style={{ ...styles.listItem, alignItems:"flex-start"}}>
            <Text style={styles.buttonText}>{props.name}</Text>
        </View>

        <View style={{ ...styles.listItem, alignItems: "flex-end"}}>           
        <TouchableOpacity onPress={copy}>
            <Text>{!copied ? "Share Playlist": "Copied"}</Text>
        </TouchableOpacity>
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