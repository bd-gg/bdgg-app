import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import GameThumbNail from '~/components/GameThumbNail';

export default class MatchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      victory: this.props.victory,
    };
  }
  render() {
    return (
      <View style={styles.root}>
        {this.state.victory ? VictoryHead() : DefeatHead()}
        <View style={[styles.body]}>
          <GameThumbNail gid={174430} size={70} />
          <View flexDirection="column" marginLeft={8} flex={1}>
            <Text style={styles.title}>글룸헤이븐</Text>
            <Text style={styles.date}>1일전 | 05/11 14:05</Text>
            <Text style={styles.optional}>SK2-2팀 | 서울시 종로구</Text>
            <View />
          </View>
          {/* <View backgroundColor="green" borderTopLength={100} flex={1} /> */}
        </View>
        <View style={[styles.tail]}>
          <Text style={styles.result_rank}>4</Text>
          <Text>th</Text>
        </View>
      </View>
    );
  }
}

function VictoryHead() {
  return (
    <View style={[styles.head, styles.victory]}>
      <Text style={{color: 'white', fontSize: 20}}>W</Text>
    </View>
  );
}
function DefeatHead() {
  return (
    <View style={[styles.head, styles.defeat]}>
      <Text style={{color: 'white', fontSize: 20}}>L</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 100,
    width: '100%',
    marginVertical: 5,
    backgroundColor: '#eeeeee',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  head: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  victory: {
    backgroundColor: 'rgb(83,131,233)',
  },
  defeat: {
    backgroundColor: '#F09D99',
  },
  body: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
  },
  optional: {
    fontSize: 14,
  },
  tail: {
    width: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  result_rank: {
    fontSize: 40,
  },
  lowerTriangle: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
  },
});
