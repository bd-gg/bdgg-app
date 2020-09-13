import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImagePropTypes,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OptionEntry from '~/components/OptionEntry';
import * as _ from 'lodash';

export default function TextInputContainer(props) {
  const [isFocused, toggleFocus] = useState(false);
  let textinput = null;
  return (
    <OptionEntry style={props.style} icon={props.icon} onPress={props.onPress}>
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
        onChangeText={props.setText}
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
      <View>{props.children}</View>
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
