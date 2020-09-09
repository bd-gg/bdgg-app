import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../Fonts';

export default function MatchHeader({ params }) {
  console.log('MatchHeader is called');
  console.log(params);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{params.name}</Text>
      <Text style={styles.titleCount}>{params.memberNo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.BM,
  },
  titleCount: {
    fontSize: 20,
    fontFamily: Fonts.BM,
    color: 'dimgrey',
    marginLeft: 5,
  },
});
