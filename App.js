import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from '~/screens/ProfileScreen';
import LoginScreen from '~/screens/LoginScreen';
import SettingScreen from '~/screens/SettingScreen';
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

function App(props) {
  return (
    <NavigationContainer>
      {props.isLogin ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'ios-home';
              } else if (route.name === 'Setting') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
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
          <Stack.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

function mapStateToProps(state) {
  return { isLogin: state.authentication.isLogin };
}

export default connect(mapStateToProps)(App);
