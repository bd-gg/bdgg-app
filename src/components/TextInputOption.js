import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OptionEntry from '~/components/OptionEntry';

export default function TextInputContainer(props) {
  const [isFocused, toggleFocus] = useState(false);
  let textinput = null;
  return (
    <OptionEntry icon={props.icon}>
      <TextInput
        style={styles.textInput}
        placeholder={props.hint || '텍스트 입력'}
        onFocus={() => {
          toggleFocus(true);
        }}
        onBlur={() => {
          toggleFocus(false);
        }}
        ref={(ref) => (textinput = ref)}
      />
      <View justifyContent="center" paddingRight={10}>
        {isFocused && (
          <TouchableOpacity
            onPress={() => {
              textinput?.clear();
            }}
          >
            <Ionicons style={styles.clearIcon} name="ios-close-circle" />
          </TouchableOpacity>
        )}
      </View>
    </OptionEntry>
  );
}

export function TextInputContainer2(props) {
  const [isFocused, toggleFocus] = useState(false);
  let textinput = null;
  return (
    <OptionEntry icon={props.icon}>
      <TextInput
        style={styles.textInput}
        placeholder={props.hint || '텍스트 입력'}
        onFocus={() => {
          toggleFocus(true);
        }}
        onBlur={() => {
          toggleFocus(false);
        }}
        onChangeText={props.setName}
      />
      <View justifyContent="center" paddingRight={10}>
        {isFocused && (
          <TouchableOpacity
            onPress={() => {
              textinput?.clear();
            }}
          >
            <Ionicons style={styles.clearIcon} name="ios-close-circle" />
          </TouchableOpacity>
        )}
      </View>
    </OptionEntry>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontSize: 18,
  },
  clearIcon: {
    color: 'grey',
    fontSize: 24,
  },
});
