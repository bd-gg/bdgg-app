import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function OptionContainer(props) {
  return (
    <View>
      <Text style={style.title}>{props.title}</Text>
      {props.children}
    </View>);
}

const style = StyleSheet.create({
  title: {
    color: "grey",
    fontSize: 18,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 8
  }
});
