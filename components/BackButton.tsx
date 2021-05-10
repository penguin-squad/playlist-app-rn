import React from 'react';
import { TouchableOpacity, Image, Dimensions ,StyleSheet} from 'react-native';
import  Ionicons  from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("screen");

interface Props{
    onPress:() =>void;

}

const BackButton = (props:Props) => {
    const { onPress}= props;
    const imageSrc='../assets/icons/backArrow.png';

    return (
      <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
         <Ionicons style={styles.icon} name={"arrow-back-outline"} size={height/30} color={'#FFF'}/> 
          {/* <Image source={require(imageSrc)} style={styles.btnIcon} /> */}
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
      flex: 1,
      alignItems: "center",
      borderRadius: 180,
      padding: 8,
      margin: 10,
     // backgroundColor: 'white',
     backgroundColor:'rgb(241, 126, 58)',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3
    },
    btnIcon: {
      height: height/40,
      width: width/40,
    },
    icon: {
      height: height/30,
      width: width/15,
    }
  });


export default BackButton;