import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TypographyOption(props) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="grey"
      onPress={props.onPress}
    >
      <View style={style.container}>
        <Text style={style.text}>{props.name}</Text>
        <Ionicons style={style.icon} name="ios-arrow-forward" />
      </View>
    </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    fontSize: 18,
  },
  icon: {
    fontSize: 20,
  },
});
