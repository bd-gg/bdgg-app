/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';

import styled from 'styled-components';
import { FloatingButton } from '~/components/FloatingButton';
import GroupListEntry from '~/components/GroupListEntry';

import image from '~/utils/image_sample';

const SampleList = [
  {
    party: '그룹 1',
    date: '2020-08-08',
    location: 'Seongnam',
    gameTitle: 'Zenga',
    members: [image[0], image[1], image[2], image[3]],
  },
  {
    party: '그룹 2',
    date: '2020-08-28',
    location: 'Seould',
    gameTitle: 'Gizmo',
    members: [image[3], image[4], image[5], image[6]],
  },
];

function GroupListScreen(props) {
  let data = props.groupList;
  if (!data) data = SampleList;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <GroupListEntry
            item={{
              members: [],
              gameTitle: item.name,
              date: item.name,
              party: item.place,
              location: item.place,
            }}
          />
        )}
      />
      <FloatingButton
        onPress={() => {
          props.navigation.navigate('Group Register');
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

export default connect(mapStateToProps, null)(GroupListScreen);
