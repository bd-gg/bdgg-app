import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';

import MatchContainer from '~/containers/MatchContainer';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const GroupList = (props) => {
  return (
    <FlatList
      data={props.groupList}
      //   // keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <MatchContainer
          victory={false}
          match={{
            gameTitle: item.image,
            date: item.name,
            party: item.place,
            location: item.name,
          }}
        />
      )}
    />
  );
};

function mapStateToProps(state) {
  return {
    groupList: state.group.groupList,
  };
}

export default connect(mapStateToProps)(GroupList);
