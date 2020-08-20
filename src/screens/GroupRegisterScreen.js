import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class GroupRegisterScreen extends React.Component {
  render() {
    return (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{}}
          >
            <Text style={{ color: 'white', fontSize: 20}}>추가</Text>
          </TouchableOpacity>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#2885D0",
    width: 75,
    height: 50,
  },
});

