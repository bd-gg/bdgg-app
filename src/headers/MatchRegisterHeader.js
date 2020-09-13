import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../Fonts';

export default function MatchRegisterHeader({ params }) {
  console.log('MatchRegisterHeader is called');
  console.log(params);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{params.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 120,
    fontSize: 18,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.BM,
  },
});
