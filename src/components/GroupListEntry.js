import React, { useState, useEffect } from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

import { formatDate } from '~/utils/date';
import GroupProfileImage from '~/components/GroupProfileImage';

export default function GroupListEntry(props) {
  const index = props.index;
  const item = props.item;
  const [dateVisible, setDateVisible] = useState(true);
  let date = ''
  if (item.recentlyPlayedGames.length != 0) {
    date = formatDate(item.recentlyPlayedGames[0].playedTime.substring(0, 19));
  }

  let __onPressed = () => {
    props.onPress(index);
  };
  let __onLongPressed = () => {
    props.onLongPress(index);
  };
  //{formatDate(item.date)}


  return (
    <TouchableHighlight
      style={styles.container}
      activeOpacity={0.8}
      underlayColor="#C0C3FF"
      onPress={__onPressed}
      onLongPress={__onLongPressed}
    >
      <View style={styles.container}>
        <GroupProfileImage
          members={item.members}
          size={54}
          style={styles.head}
        />
        <View style={styles.body}>
          <View height={22} alignItems="center" flexDirection="row">
            <Text style={{ fontSize: 16, fontWeight: '800', flexShrink: 1 }}>
              {item.party}
            </Text>
            {item.participants > 1 && (
              <Text style={styles.participants}>{item.participants}</Text>
            )}
          </View>
          <View height={18} alignItems="center" flexDirection="row">
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{ color: 'grey', fontSize: 12 }}
            >
              {item.location}
            </Text>
            <View></View>

            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{ color: 'grey', fontSize: 12 }}
            >
              {item.gameTitle}
            </Text>
          </View>
        </View>
        <View style={styles.tail}>
          <Text flex={1} style={styles.date}>
              {date}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 66,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  head: {
    marginLeft: 10,
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
    paddingRight: 16,
    justifyContent: 'center',
    height: '100%',
  },
  date: {
    color: '#919BA4',
    fontSize: 12,
  },
  victory: {
    color: 'orange',
    fontSize: 15,
  },
  participants: {
    fontSize: 16,
    color: '#777BFF',
    marginLeft: 5,
  },
});
