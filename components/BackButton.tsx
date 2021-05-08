import React from 'react';
import { TouchableOpacity, Image, Dimensions ,StyleSheet} from 'react-native';

const { width, height } = Dimensions.get("screen");

interface Props{
    onPress:() =>void;

}

const BackButton = (props:Props) => {
    const { onPress}= props;
    const imageSrc='../assets/icons/backArrow.png';

    return (
      <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
          <Image source={require(imageSrc)} style={styles.btnIcon} />
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
      backgroundColor: 'white',
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
    }
  });


export default BackButton;