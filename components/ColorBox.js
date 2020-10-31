import React from 'react';
import { View, Text } from 'react-native';

const ColorBox = (props) => {
  const boxColor = {
    backgroundColor: props.hexCode,
  };

  const box = {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    padding: 4,
  };
  const textColor = {
    color:
      parseInt(props.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[boxColor, box]}>
      <Text style={textColor}>
        {props.colorName}: {props.hexCode}
      </Text>
    </View>
  );
};

export default ColorBox;
