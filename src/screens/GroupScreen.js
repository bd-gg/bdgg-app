import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function GroupLayout() {
    return (
        <View>
        <Text>"TEST"</Text>
        </View>
    )
}

export default function GroupScreen() {
    return (
    <Stack.Navigator>
      <Stack.Screen name="Group" component={GroupLayout} />
    </Stack.Navigator>
       );
}
