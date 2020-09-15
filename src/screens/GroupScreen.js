/* eslint-disable no-unused-vars */
import React from 'react';
import { Platform, View, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import styled from 'styled-components';
import GroupRegisterScreen from './GroupRegisterScreen';
import MatchRegisterScreen from './MatchRegisterScreen';

import GroupListScreen, { GroupListHeaderRight } from './GroupListScreen';
import MatchListScreen from './MatchListScreen';
import SelectUsersScreen from './SelectUsersScreen';

import MatchHeader from '../headers/MatchHeader';
import MatchRegisterHeader from '../headers/MatchRegisterHeader';
import SelectUsersHeader from '../headers/SelectUsersHeader';

import { Icon } from 'react-native-elements';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Stack = createStackNavigator();

function GroupScreen(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Group List"
        component={GroupListScreen}
        options={{ headerRight: GroupListHeaderRight }}
      />
      <Stack.Screen
        name="Match List"
        component={MatchListScreen}
        options={({ route }) => ({
          headerTitle: () => {
            return <MatchHeader params={route.params}></MatchHeader>;
          },
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="Match Register"
        component={MatchRegisterScreen}
        options={({ route }) => ({
          headerTitle: () => {
            return (
              <MatchRegisterHeader params={route.params}></MatchRegisterHeader>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Match List');
                }}
              >
                <View flex={1} marginLeft={12} justifyContent="center">
                  <Icon type="antdesign" name="arrowleft" />
                </View>
              </TouchableOpacity>
            );
          },
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="Select Users"
        component={SelectUsersScreen}
        options={({ route }) => ({
          headerTitle: () => {
            return (
              <SelectUsersHeader params={route.params}></SelectUsersHeader>
            );
          },
          headerLeft: () => {
            return (
              <View flex={1} marginLeft={8} justifyContent="center">
                <Icon type="antdesign" name="arrowleft" />
              </View>
            );
          },
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen name="Group Register" component={GroupRegisterScreen} />
    </Stack.Navigator>
  );
}

export default GroupScreen;
