import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import OptionEntry from '~/components/OptionEntry';

export default function MemoOption(props) {
  const [height, setHeight] = useState(80);

  return (
    <OptionEntry icon={props.icon} style={{ height }}>
      <TextInput style={styles.textInput}
        multiline
        placeholder={props.hint || "텍스트 입력"}
        onContentSizeChange={ev => {
          setHeight(ev.nativeEvent.contentSize.height);
        }} />
    </OptionEntry>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontSize: 15,
    color: "grey",
  },
  clearIcon: {
    color: "grey",
    fontSize: 24,
  }
});