import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

export default function UserSearchEntry(props) {
  const index = props.index;
  const item = props.item;

  let __onPressed = () => {
    props.onPress(index);
  };

  return (
    <TouchableHighlight
      style={styles.container}
      activeOpacity={0.8}
      underlayColor="#C0C3FF"
      onPress={__onPressed}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: item.imageUrl }}
          PlaceholderContent={<View />}
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
          }}
        />
        <View style={styles.body}>
          <View height={18} alignItems="center" flexDirection="row">
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{ color: 'grey', fontSize: 12 }}
            >
              {item.name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 66,
    backgroundColor: '#F8E71C',
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
