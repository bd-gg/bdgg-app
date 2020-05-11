import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import GameThumbNail from '~/components/GameThumbNail';

export default class MyProfileContainer extends React.Component {
  render() {
    return (
      <View
        style={styles.myProfileContainer}
        flexDirection="column"
        marginTop={15}>
        <View flexDirection="row" alignItems="center">
          <Image
            source={{
              uri:
                'https://cdn.iconscout.com/icon/free/png-256/profile-417-1163876.png',
            }}
            style={{
              height: 80,
              width: 80,
              marginTop: 5,
              marginRight: 10,
            }}
          />
          <Text style={{fontSize: 20}}>BDGG</Text>
        </View>
        <View
          flexDirection="row"
          height={80}
          alignItems="center"
          justifyContent="space-around">
          <View flexDirection="row" alignItems="center" flex={1}>
            <GameThumbNail gid={123} />
            <Text style={{margin: 10}}>15 G</Text>
          </View>
          <View flexDirection="row" alignItems="center" flex={1}>
            <Image
              source={{
                uri:
                  'https://cf.geekdo-images.com/thumb/img/wvfZwwtcqpth4bgHnh4M-EhUCXg=/fit-in/200x150/pic4458123.jpg',
              }}
              style={{width: 60, height: 60, borderRadius: 30}}
            />
            <Text style={{margin: 10}}>15 G</Text>
          </View>
          <View flexDirection="row" alignItems="center" flex={1}>
            <Image
              source={{
                uri:
                  'https://cf.geekdo-images.com/thumb/img/yuVWEJ14iZMS5KLl1MRZSvB9FrM=/fit-in/200x150/pic3918905.png',
              }}
              style={{width: 60, height: 60, borderRadius: 30}}
            />
            <Text style={{margin: 10}}>15 G</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myProfileContainer: {
    borderRadius: 13,
    paddingHorizontal: 10,
    elevation: 3,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
