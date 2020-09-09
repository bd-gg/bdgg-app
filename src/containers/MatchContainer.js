import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, AsyncStorage } from 'react-native';

import GameThumbNail from '~/components/GameThumbNail';
import { formatDate, describeDate } from '~/utils/date';
import { getBoardGameInfo } from '~/api/boardgamegeek';

export default function MatchContainer(props) {
  const { item } = props;

  const [gameTitle, setGameTitle] = useState(0);
  console.log('====MatchContainer is called====');

  useEffect(() => {
    getBoardGameInfo(item.gameId).then((res) => {
      setGameTitle(res.name);
    });
  }, []);
  // console.log(`gameTitle = ${gameTitle}`);

  return (
    <View style={styles.root}>
      {AsyncStorage.getItem('myId') == item.winnerId
        ? VictoryHead()
        : DefeatHead()}
      <View style={[styles.body]}>
        <GameThumbNail gid={item.gameId} size={70} />
        <View flexDirection="column" marginLeft={8} flex={1}>
          <Text style={styles.title}>{gameTitle}</Text>
          <Text style={styles.date}>
            {describeDate(item.playedTime)} | {formatDate(item.playedTime)}
          </Text>
          <Text style={styles.optional}>
            {item.party || 'SK2-2'} | {item.place}
          </Text>
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

function VictoryHead() {
  return (
    <View style={[styles.head, styles.victory]}>
      <Text style={{ color: 'white', fontSize: 20 }}>W</Text>
    </View>
  );
}
function DefeatHead() {
  return (
    <View style={[styles.head, styles.defeat]}>
      <Text style={{ color: 'white', fontSize: 20 }}>L</Text>
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
