import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    blurOnSubmit: boolean;
}


const PlainInput = (props: Props) => (

    <View  style={{marginVertical:10, alignItems: "center"}}>
      <TextInput style={styles.input}
          placeholder={props.placeholder} 
          onChangeText={props.onChangeText}
          blurOnSubmit ={props.blurOnSubmit}
          />
       </View>            
    );

export default PlainInput;

const styles = StyleSheet.create({
    input: {
        borderColor: "#555",
        borderWidth: 1,
        padding: 10,
        width: width/1.1,
        borderRadius:20,
        textAlign:"center",
        transform: [{ scaleX: 1}, { scaleY: 1 }]  
    },

});

