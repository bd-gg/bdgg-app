import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {getBoardGameInfo} from '~/api/boardgamegeek';

export default class GameThumbNail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gid: this.props.gid,
      /* question mark image url is used temporarily */
      url: 'https://imgur.com/a/Qw6mZkb',
      size: this.props.size,
      radius: this.props.size / 2,
    };
  }

  componentDidMount() {
    getBoardGameInfo(this.state.gid).then(res => {
      this.setState({url: res.thumbnail});
    });
  }

  render() {
    return (
      <Image
        source={{uri: this.state.url}}
        PlaceholderContent={<View />}
        style={{
          width: this.state.size,
          height: this.state.size,
          borderRadius: 1000,
        }}
      />
    );
  }
}

const style = StyleSheet.create({});
