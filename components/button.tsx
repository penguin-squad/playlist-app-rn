import React from "react";
import {TouchableOpacity,View,Text,StyleSheet} from "react-native";

interface Props{
    title: string;
    onPress:() =>void;
    background?: string;
    color?:string;
}

const Button = (props:Props) => {
    const { title, onPress, background, color,}= props;
    return(
      <View style={styles.container}>
        <TouchableOpacity
            style={[{backgroundColor: background || "rgba(81,135,200,1)"},
                styles.button,]}
            onPress={onPress}
            >
         <Text style={styles.text} >{title} </Text>  
        </TouchableOpacity>
        </View>  
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 25,
    },

    button: {
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        alignItems: "center",
        backgroundColor:'rgb(241, 126, 58)',
         // height: 50,
      },
      text: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: "600",
      },
  });


  
  export default Button;
