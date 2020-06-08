import React from 'react';
import {View, Text} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileScreen from '~/screens/ProfileScreen';
import LoginScreen from '~/screens/LoginScreen';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '~/reducers';

const store = createStore(rootReducer);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SettingView() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
      }}
    />
  );
}

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function InitScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

function SettingScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={SettingView} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'ios-home';
              } else if (route.name === 'Setting') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              } else if (route.name === 'Login') {
                iconName = 'ios-arrow-dropright';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Stack.Screen name="Login" component={InitScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
