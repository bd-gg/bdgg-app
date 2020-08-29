import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import styled from 'styled-components';
import GroupList from './GroupList';
import AddGroupLayout from './AddGroupLayout';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Stack = createStackNavigator();

function GroupScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Group List"
        component={connect(null, mapDispatchToProps)(GroupListScreen)}
      />
    </Stack.Navigator>
  );
}

function GroupListScreen(props) {
  let getGroup = props.getGroup;
  fetch(
    'http://ec2-13-125-12-178.ap-northeast-2.compute.amazonaws.com:8080/users/1/groups',
    {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }
  )
    .then((res) => {
      console.log('Get group list from server!!');
      return res.json();
    })
    .then((res) => {
      console.log('res.items: ', res.items);
      console.log(props);
      // res.items로 넣을 경우 무한 로딩
      getGroup(res.items);
    })
    .catch((err) => {
      console.error(err);
    });
  return (
    <Container>
      <GroupList />
      <AddGroupLayout />
    </Container>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getGroup: (groupList) =>
      dispatch({ type: 'GET_GROUP', payload: { groupList } }),
  };
}

export default GroupScreen;
