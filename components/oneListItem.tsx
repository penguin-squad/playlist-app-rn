import React, { FC } from 'react';
import { View, Text, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const { width, height } = Dimensions.get('screen');

const RightActions =({ progress, dragX, onPress}) => {
    const scale = dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1 ,0],
        extrapolate: 'clamp',
    });

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.rightAction} >
                <Text style={styles.actionText} >Delete </Text>
            </View>


        </TouchableOpacity>
    )

};


const OneListItem: FC<any>=(props) => { 
    const deletePlaylist =()=> {
        console.log("Delete Playlist");
        console.log("holder playlistId: "+ props.id); 
        props.deletePlaylist(props.id);  
    
    };
 
 //   console.log(props)
    
return (
<>
<Swipeable
    renderRightActions={(progress, dragX) => (
    <RightActions progress={progress} dragX={dragX} onPress={deletePlaylist} />
    )} >

   <View style={styles.container}> 
        <View style={{ ...styles.listItem, alignItems:"flex-start"}}>
            <Text style={styles.buttonText}>{props.name}</Text>
        </View>

        <View style={{ ...styles.listItem, alignItems: "flex-end"}}>           
            <Text style={styles.buttonText}>{props.id}</Text>
        </View>
    </View> 
    </Swipeable>  
     </>  
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
    rightAction: {
        backgroundColor: "#dd2c00",
        flex : 1,
        justifyContent: "center",
        // alignItems:"flex-end",
    },
    actionText : {
        color:"#fff",
        fontWeight:"600",
        padding: 20,
    }  

});

