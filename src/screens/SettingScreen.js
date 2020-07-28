import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import OptionContainer from '~/containers/OptionBoxContainer.js';
import TypographyOption from '../components/TypographyOption.js';

function SettingLayout() {
  return (
    <ScrollView>
      <View>
        <OptionContainer title="Accounts">
          <TypographyOption
            name="프로필 변경"
            onPress={() => {
              alert('TODO');
            }}
          />
          <TypographyOption name="비밀번호 변경" />
        </OptionContainer>
        <OptionContainer title="Policy">
          <TypographyOption name="이용약관" />
        </OptionContainer>
        <OptionContainer title="Contact">
          <TypographyOption name="버그 리포트" />
          <TypographyOption name="리뷰 작성" />
        </OptionContainer>
      </View>
    </ScrollView>
  );
}

export default function SettingScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingLayout} />
    </Stack.Navigator>
  );
}
