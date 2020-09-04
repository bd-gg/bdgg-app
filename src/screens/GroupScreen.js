/* eslint-disable no-unused-vars */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';

import styled from 'styled-components';
import GroupRegisterScreen from './GroupRegisterScreen';

import GroupListScreen from './GroupListScreen';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Stack = createStackNavigator();

function GroupScreen(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Group List" component={GroupListScreen} />
      <Stack.Screen name="Group Register" component={GroupRegisterScreen} />
    </Stack.Navigator>
  );
}

export default GroupScreen;
