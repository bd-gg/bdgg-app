/* eslint-disable no-unused-vars */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';

import styled from 'styled-components';
import GroupRegisterScreen from './GroupRegisterScreen';

import GroupListScreen from './GroupListScreen';
import { getGroupInfo } from '~/api/boardgamegeek';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Stack = createStackNavigator();

function GroupScreen(props) {
  //let getGroup = props.getGroup;
  //fetch(
  //'http://ec2-13-125-12-178.ap-northeast-2.compute.amazonaws.com:8080/users/1/groups',
  //{
  //method: 'GET',
  //headers: { 'content-type': 'application/json' },
  //}
  //)
  //.then((res) => {
  //console.log('Get group list from server!!');
  //return res.json();
  //})
  //.then((res) => {
  //console.log('res.items: ', res.items);
  //console.log(props);
  //// res.items로 넣을 경우 무한 로딩
  //getGroup(res.items);
  //})
  //.catch((err) => {
  //console.error(err);
  //});
  const test = {
    image: 'exam1',
    name: 'exam2',
    members: ['b'],
    place: 'test3',
  };

  console.log(`GroupScreen Start`);
  getGroupInfo(1, props.getGroup);
  console.log(`GroupScreen End`);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Group List" component={GroupListScreen} />
      <Stack.Screen name="Group Register" component={GroupRegisterScreen} />
    </Stack.Navigator>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getGroup: (groupList) =>
      dispatch({ type: 'GET_GROUP', payload: { groupList } }),
  };
}

export default connect(null, mapDispatchToProps)(GroupScreen);
