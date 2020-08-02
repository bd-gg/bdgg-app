import React, { Component, useEffect } from 'react';
import { View, Text } from 'react-native';
import { AsyncStorage } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from '~/screens/ProfileScreen';
import LoginScreen from '~/screens/LoginScreen';
import AppLoadingScreen from '~/screens/AppLoadingScreen';
import SettingScreen from '~/screens/SettingScreen';
import GroupScreen from '~/screens/GroupScreen';
import MatchRegisterScreen from '~/screens/MatchRegisterScreen';

import { connect } from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={ProfileScreen} />
      <Stack.Screen name="MatchRegister" component={MatchRegisterScreen} />
    </Stack.Navigator>
  );
}

function MyTabIndicator() {
  return <View style={{ height: 10, width: 10, backgroundColor: 'white' }} />;
}

function App(props) {
  useEffect(() => {
    console.log(props.isLoading);
  });

  const chooseScreen = (props) => {
    if (props.isLoading) {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Loading" component={AppLoadingScreen} />
        </Stack.Navigator>
      );
    }
    if (props.isLogin) {
      return (
        <Tab.Navigator
          tabBarOptions={{ renderIndicator: MyTabIndicator }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'ios-home';
              } else if (route.name === 'Setting') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              } else if (route.name === 'Group') {
                iconName = 'ios-people';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Group" component={GroupScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
      );
    } else {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      );
    }
  };

  return <NavigationContainer>{chooseScreen(props)}</NavigationContainer>;
}

function mapStateToProps(state) {
  return {
    isLogin: state.authentication.isLogin,
    isLoading: state.authentication.isLoading,
  };
}

export default connect(mapStateToProps)(App);
