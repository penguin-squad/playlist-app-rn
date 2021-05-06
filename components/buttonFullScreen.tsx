import React from "react";
import {Dimensions,Text,StyleSheet, TouchableOpacity} from "react-native";


interface Props{
    title: string;
    onPress:() =>void;
    background?: string;
    color?:string;
    disabled?:boolean;
}
const { width } = Dimensions.get("screen");

const ButtonFullScreen = (props:Props) => (
   <TouchableOpacity style={props.disabled?styles.buttondisabled:styles.button}
            onPress={props.onPress} disabled={props.disabled}>
    <Text style={{fontSize: 18, color: "white", fontWeight: "600"}} >{props.title} </Text>  
   </TouchableOpacity>
    );

export default ButtonFullScreen;

const styles = StyleSheet.create({
    button: {      
        backgroundColor: "rgba(81,135,200,1)",
        padding: 10,
        marginLeft:"5%",
        borderWidth:0,
        width: width/1.1, //how much of the screen it takes
        borderRadius: 20,
        alignItems: "center",
        transform: [{ scaleX: 1}, { scaleY: 1 }]   
    },
    buttondisabled:{
        backgroundColor:"rgba(200,200,200,1)",
        padding: 10,
        marginLeft:"5%",
        borderWidth:0,
        width: width/1.1, //how much of the screen it takes
        borderRadius: 20,
        alignItems: "center",
        transform: [{ scaleX: 1}, { scaleY: 1 }] 
    }
  });

