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
   <TouchableOpacity style={styles.button}
            onPress={props.onPress} >
    <Text style={styles.buttonText} >{props.title} </Text>  
   </TouchableOpacity>
    );

export default ButtonFullScreen;

const styles = StyleSheet.create({
    button: {      
        backgroundColor: 'rgb(241, 126, 58)',
        padding: 10,
        marginLeft:"5%",
        borderWidth:0,
        width: width/1.1, //how much of the screen it takes
        borderRadius: 20,
        alignItems: "center",
        transform: [{ scaleX: 1}, { scaleY: 1 }]   
    }, buttonText: {
        fontSize: 18,
        color: "white", 
        fontWeight: "600"
    }
  });
