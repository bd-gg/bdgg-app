import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TextInputContainer(props) {
  const [isFocused, toggleFocus] = useState(false);
  let _textinput = null;
  return (
    <View style={styles.container}>
      {props.icon && <Ionicons style={styles.icon} name={props.icon} />}
      <TextInput
        flex={1}
        style={styles.text}
        placeholder={props.hint || "텍스트 입력"}
        onFocus={() => { toggleFocus(true) }}
        onBlur={() => { toggleFocus(false) }}
        ref={ref => _textinput = ref} />
      <View justifyContent="flex-end" paddingHorizontal={18}>
        <TouchableOpacity onPress={() => { _textinput?.clear(); }}>
          {isFocused &&
            <Ionicons style={styles.clear} name="ios-close-circle" />
          }
        </TouchableOpacity>
      </View>
    </View>);
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    paddingVertical: 0,
  },
  text: {
    fontSize: 20,
    paddingLeft: 10,
  },
  icon: {
    color: "grey",
    fontSize: 24,
    paddingLeft: 20,
  },
  clear: {
    color: "grey",
    fontSize: 24,
  }
});