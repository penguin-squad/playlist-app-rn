import React from "react";
import { Text, View,  StyleSheet , Dimensions} from "react-native";


const { width } = Dimensions.get('screen');

interface Props {
    title: string;
    width ?:string;
}

const Header = (props: Props) => (

    <View style={styles.container}>
        <Text style={styles.title}> {props.title} </Text>      
    </View>
);

export default Header;

const styles = StyleSheet.create({
    container: {
        width: width /1,
        height: 50,
        //borderBottomColor: '#aaa',
        flex: 0.9,
        justifyContent: "center",
        alignItems: "center",
        //padding: 5,
        marginVertical: 5, 
        backgroundColor:'rgb(34, 39, 63)',  
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor: 'rgb(34, 39, 63)',
        color: '#FFF'

    },
});

