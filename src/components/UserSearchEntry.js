import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileImage from '~/components/ProfileImage';

export default function UserSearchEntry(props) {
  const index = props.index;
  const item = props.item;

  let __onPressed = () => {
    props.onPress(index);
  };

  return (
    <TouchableHighlight
      flex={1}
      activeOpacity={0.8}
      underlayColor="#dcddfc"
      onPress={__onPressed}
    >
      <View style={styles.container}>
        <ProfileImage source={{ uri: item.imageUrl }} style={styles.head} />
        <View style={styles.body}>
          <View height={18} alignItems="center" flexDirection="row">
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{ color: 'black', fontSize: 18 }}
            >
              {item.name}
            </Text>
            <Text> </Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{ color: 'grey', fontSize: 14 }}
            >
              {' #'}
              {item.id ? item.id : 'ABC'}
            </Text>
          </View>
        </View>
        <View style={styles.tail}>
          <Ionicons style={styles.forwardIcon} name="ios-arrow-forward" />
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 10,
  },
  tail: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: 10,
    justifyContent: 'center',
    height: '100%',
  },
  forwardIcon: {
    fontSize: 24,
    color: 'grey',
  },
});
