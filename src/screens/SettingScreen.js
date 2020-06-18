import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function SettingLayout() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    />
  );
}

export default function SettingScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={SettingLayout} />
    </Stack.Navigator>
  );
}