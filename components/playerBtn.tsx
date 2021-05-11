import React from 'react';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
//import color from '../misc/color';

// interface Props{
//     title: string;
//     onPress:() =>void;
//     background?: string;
//     color?:string;
// }


const PlayerBtn =(props) => {
  
    const { iconType, size = 40, onPress } = props;
    //iconColor = color.FONT,
  
  const getIconName = (type:string) => {
    switch (type) {
      case 'PLAY':
        return 'pausecircle';
      case 'PAUSE':
        return 'playcircleo';
      case 'NEXT':
        return 'forward';
      case 'PREV':
        return 'banckward';
      case 'BACK':
        return 'left';
      case 'LOADING':
        return 'loading'
    }
  };

  return (
    <AntDesign
      {...props}
      onPress={onPress}
      name={getIconName(iconType)}
      size={size}
      //color={iconColor}
    />
  );
};

export default PlayerBtn;