/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';

import styled from 'styled-components';
import { FloatingButton } from '~/components/FloatingButton';
import GroupListEntry from '~/components/GroupListEntry';

import image from '~/utils/image_sample';

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

function GroupListScreen(props) {
  console.log(`GroupListScreen`, props.groupList);
  let data = props.groupList;
  if (!data) data = SampleList;
  return (
    <Container>
      <View>
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
        <FloatingButton
          onPress={() => {
            props.navigation.navigate('Group Register');
          }}
        />
      </View>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    groupList: state.group.groupList,
  };
}

export default connect(mapStateToProps, null)(GroupListScreen);
