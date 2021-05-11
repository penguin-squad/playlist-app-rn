import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    blurOnSubmit: boolean;
    
}


const PlainInput = (props: Props) => (

    <View  style={styles.container}>
      <TextInput style={styles.input}
          placeholderTextColor={'rgb(105,110,131)' }
          placeholder={props.placeholder} 
          onChangeText={props.onChangeText}
          blurOnSubmit ={props.blurOnSubmit}
          />
       </View>            
    );

export default PlainInput;

const styles = StyleSheet.create({
    container:{

        alignItems: "center",
        borderRadius: 180,
        margin: 5,
        backgroundColor: 'rgb(48,56,87)',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        flexDirection:"row",
    },
    input: {
            borderColor: "#555",
            borderWidth: 1,
            padding: 10,
            width: width/1.1,
            borderRadius:20,
            textAlign:"center",
            transform: [{ scaleX: 1}, { scaleY: 1 }],
            color: 'white',
        },

});

