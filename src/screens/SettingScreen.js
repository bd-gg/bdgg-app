import React from 'react';
import { View, ScrollView } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import OptionContainer from '~/containers/OptionBoxContainer.js';
import TypographyOption from '../components/TypographyOption.js';

import TermsOfServiceScreen from '~/screens/TermsOfServiceScreen';
import LinkToFeedback from '~/api/LinkToFeedback';

function SettingLayout(props) {
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
          <TypographyOption
            name="이용약관"
            onPress={() => {
              props.navigation.navigate('이용 약관');
            }}
          />
        </OptionContainer>
        <OptionContainer title="Contact">
          <TypographyOption name="버그 리포트" onPress={LinkToFeedback} />
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
      <Stack.Screen name="이용 약관" component={TermsOfServiceScreen} />
    </Stack.Navigator>
  );
}
