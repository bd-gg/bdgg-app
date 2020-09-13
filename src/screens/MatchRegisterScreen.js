import React from 'react';
import { View, Text, StyleSheet, ImagePropTypes } from 'react-native';

import TextInputContainer from '~/components/TextInputOption';
import AddContainer from '~/components/AddOption';
import ToggleInputContainer from '~/components/ToggleOption';
import MemoOption from '~/components/MemoOption';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';

function MatchRegisterScreen(props) {
  return (
    <View style={{ backgroundColor: 'white', paddingTop: 8 }}>
      <TextInputContainer
        style={styles.container}
        icon={<Icon name="dice" type="font-awesome-5" color="red" />}
        hint="보드게임 제목을 입력해주세요."
      ></TextInputContainer>
      <TextInputContainer
        style={styles.container}
        icon={
          <Icon
            name="location-pin"
            type="entypo"
            color="rgba(240, 110, 100, 1.0)"
            size={33}
          />
        }
        hint="위치"
      ></TextInputContainer>
      <AddContainer
        style={{
          ...styles.container,
        }}
        icon={<Icon name="account-group" type="material-community" size={32} />}
        hint="게임 점수 기록하기"
        onPress={() => {
          props.navigation.navigate('Select Users', {
            name: '사용자 선택',
          });
        }}
      >
        <View>
          <Icon name="plus" type="entypo"></Icon>
        </View>
      </AddContainer>
      <MemoOption
        style={styles.container}
        icon={<Icon name="pencil" type="foundation" />}
        hint="이번 매치에 대한 평가를 남겨주세요!"
      />
      <TouchableOpacity style={styles.checkContainer}>
        <View
          style={{
            alignItems: 'center',
            padding: 10,
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>확인</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(244,244,244,1)',
    marginHorizontal: 25,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkContainer: {
    backgroundColor: 'rgba(236,118,90,1)',
    borderRadius: 4,
    marginHorizontal: 25,
    marginVertical: 8,
  },
  gameIcon: {
    flex: 1,
    fontSize: 18,
  },
});

export default MatchRegisterScreen;
