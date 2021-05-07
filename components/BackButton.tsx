import React from 'react';
import { TouchableOpacity, Image, Text, View ,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
//import styles from './styles';

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
      height: 19,
      width: 19
    }
  });


export default BackButton;