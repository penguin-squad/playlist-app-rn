import React from "react";
import {Dimensions,Text,StyleSheet, TouchableOpacity} from "react-native";


interface Props{
    title: string;
    onPress:() =>void;
    background?: string;
    color?:string;
}
const { width } = Dimensions.get("screen");

const ButtonFullScreen = (props:Props) => (
   <TouchableOpacity style={styles.button}
            onPress={props.onPress} >
    <Text style={{fontSize: 18, color: "white", fontWeight: "600"}} >{props.title} </Text>  
   </TouchableOpacity>
    );

export default ButtonFullScreen;

const styles = StyleSheet.create({
    button: {      
        backgroundColor: "rgba(81,135,200,1)",
        padding: 10,
        borderWidth:0,
        width: width/1.1, //how much of the screen it takes
        borderRadius: 20,
        alignItems: "center",
               
        transform: [{ scaleX: 1}, { scaleY: 1 }]   
    },
  });

