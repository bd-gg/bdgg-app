import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';

import image from '~/utils/image_sample';

import GroupListEntry from '~/components/GroupListEntry';

const Container = styled.SafeAreaView`
  flex: 1;
`;

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

function GroupList(props) {
  let data = props.groupList;
  if (!data) data = SampleList;

  console.log(props);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <GroupListEntry
          item={{
            members: item.members,
            gameTitle: item.image,
            date: item.date,
            party: item.party,
            location: item.location,
          }}
        />
      )}
    />
  );
}

function mapStateToProps(state) {
  console.log(state);

  return {
    groupList: state.group.groupList,
    groupListSize: 20,
  };
}

export default connect(mapStateToProps)(GroupList);
