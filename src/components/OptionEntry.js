import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function OptionEntry(props) {
  return (
    <View style={[styles.container, props.style]}>
      {props.icon && <Ionicons style={styles.icon} name={props.icon} />}
      <View style={styles.layout}>
        {props.children}
      </View>
    </View>);
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    paddingLeft: 25,
    paddingRight: 10,
    height: 50,
    minHeight: 50
  },
  icon: {
    color: "grey",
    fontSize: 24,
    paddingRight: 20,
  },
  layout: {
    flex: 1,
    flexDirection: "row"
  }
});