import React, { FC , useState } from "react";
import { Text, View, TextInput, StyleSheet, Dimensions } from "react-native";
//import  Ionicons  from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("screen");

interface Props {
    icon: string;
    placeholder: string;
    onChangeText: (text: string) => void;
}

const Search= (props: Props) => {
 return (
  <View >
    <View  style={styles.container}>

       <View style={{flexDirection:"row"}}>
        {/* <Ionicons style={{ padding: 5 }} name={props.icon} size={28} color="#555" />                  */}
        <TextInput style={styles.holder}
          placeholder={props.placeholder} 
          onChangeText={props.onChangeText} />
       </View>            
    </View>
 </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        width: width/1.1,
        paddingVertical: 10,
        //justifyContent: "space-around",
       // height: 50,
       // borderBottomColor: '#aaa',
        flex: 0.2,
        //justifyContent: "center",
        backgroundColor: "#ddd",
 
    },
    holder: {
        //borderBottomColor: '#aaa',
     
        //justifyContent: "center",
        flex: 1.1,
        alignItems: "center",
        //backgroundColor: "#ddd",
        //padding: 5,
        //placeholderTextColor:"#555", 
        //color:"#555", 
       // borderRadius: 5,
    },
    
});

