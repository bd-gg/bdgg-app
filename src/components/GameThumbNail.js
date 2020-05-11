import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';

export default class GameThumbNail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game_id: props.gid,
    };
  }
  render() {
    //TODO
    const uri =
      'https://cdn.iconscout.com/icon/free/png-256/profile-417-1163876.png';
    return <Image source={{uri: uri}} style={style.thumbnail} />;
  }
}

const style = StyleSheet.create({
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
