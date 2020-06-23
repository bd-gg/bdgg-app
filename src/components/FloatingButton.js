import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FloatingButton(props) {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => { alert("TODO"); }}>
      <View style={styles.position}>
        <Ionicons style={styles.icon} name="ios-add" />
      </View>
    </TouchableHighlight >
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    right: 30,
    borderRadius: 50,
    zIndex: 10,
  },
  position: {
    width: 75,
    height: 75,
    backgroundColor: "#2885D0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  icon: {
    fontSize: 40,
    color: "white"
  }
});