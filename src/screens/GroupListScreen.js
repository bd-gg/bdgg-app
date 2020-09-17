/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { FloatingButton } from '~/components/FloatingButton';
import GroupListEntry from '~/components/GroupListEntry';
import GroupListEntryPopup from '~/components/GroupListEntryPopup';

import image from '~/utils/image_sample';
import { getGroupInfo } from '~/api/boardgamegeek';

const SampleList = [
  {
    party: '그룹 1',
    date: '2020-08-08',
    location: 'Seongnam',
    gameTitle: 'Zenga',
    members: [image[0], image[1], image[2], image[3]],
    gameId: 174430,
    id: 1,
  },
  {
    party: '그룹 2',
    date: '2020-08-28',
    location: 'Seould',
    gameTitle: 'Gizmo',
    members: [image[3], image[4], image[5], image[6]],
    gameId: 174431,
    id: 2,
  },
];

function GroupListScreen(props) {
  console.log('GroupListScreen is called');

  getGroupInfo(1, props.getGroup);
  let data = props.groupList;
  if (!data) data = SampleList;

  const [isPopupVisible, setPopupVisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <GroupListEntry
            item={{
              members: [],
              gameTitle: item.name,
              recentlyPlayedGames: item.recentlyPlayedGames,
              party: item.name,
              location: item.place,
            }}
            index={index}
            onPress={(index) => {
              let memberNo = item.members.length;
              props.navigation.navigate('Match List', {
                name: item.name,
                memberNo: memberNo,
                groupId: item.id,
                index: index,
              });
            }}
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
          props.navigation.navigate('Group Register');
        }}
      />
      <GroupListEntryPopup
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
    groupList: state.group.groupList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGroup: (groupList) =>
      dispatch({ type: 'GET_GROUP', payload: { groupList } }),
  };
}

export function GroupListHeaderRight(props) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => {
          alert('Not yet implemented');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Ionicons
          name="ios-search"
          size={28}
          color="grey"
          style={{ paddingRight: 15 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert('Not yet implemented2');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Ionicons
          name="ios-menu"
          size={36}
          color="grey"
          style={{ paddingRight: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupListScreen);
