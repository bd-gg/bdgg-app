import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OptionEntry from '~/components/OptionEntry';
import * as _ from 'lodash';

export default function AddContainer(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <OptionEntry style={props.style} icon={props.icon}>
        <View flex={8}>
          <TextInput style={styles.text} editable={false}>
            {props.hint}
          </TextInput>
        </View>
        <View
          flex={2}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginLeft: 10,
          }}
        >
          {props.children}
        </View>
      </OptionEntry>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 18,
    width: 250,
    color: 'rgb(202,202,204)',
  },
  clearIcon: {
    color: 'grey',
    fontSize: 24,
  },
});
