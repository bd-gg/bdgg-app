/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';

import { FloatingButton } from '~/components/FloatingButton';
import MatchListEntry from '~/components/MatchListEntry';
import MatchListEntryPopup from '~/components/MatchListEntryPopup';

import image from '~/utils/image_sample';
import { getMatchListInfo } from '~/api/boardgamegeek';
import MatchContainer from '../containers/MatchContainer';

const SampleList = [
  {
    party: '매치 1',
    date: '2020-08-08',
    location: 'Seongnam',
    gameTitle: 'Zenga',
    members: [image[0], image[1], image[2], image[3]],
  },
];

let matchListId;

function MatchListScreen(props) {
  // let id = props.route.params.groupId;
  const { groupId } = props.route.params;
  console.log('MatchListScreen is called');

  useEffect(() => {
    console.log('====MatchListScreen useEffect is called====');
    getMatchListInfo(groupId, props.getMatchList);
    matchListId = matchListId + 1;
  }, []);

  let data = props.matchList;
  console.log('----------MatchList start---------');
  console.log(data);
  if (!data) data = SampleList;

  const [isPopupVisible, setPopupVisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <MatchContainer
            key={matchListId}
            item={item}
            index={index}
            onLongPress={(index) => {
              //TODO: set index to popup
              setPopupVisible(true);
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <FloatingButton
        onPress={() => {
          props.navigation.navigate('Match Register');
        }}
      />
      <MatchListEntryPopup
        isVisible={isPopupVisible}
        close={() => {
          setPopupVisible(false);
        }}
      />
    </View>
  );
}

function mapStateToProps(state) {
  return {
    matchList: state.match.matchList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMatchList: (matchList) =>
      dispatch({ type: 'GET_MATCH_LIST', payload: { matchList } }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchListScreen);
