import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MyProfileContainer from '~/containers/MyProfileContainer';
import MatchContainer from '~/containers/MatchContainer';

function test() {
  alert('onSubmit');
}

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          backgroundColor: 'white', //'#f8f8f8',
          paddingHorizontal: 15,
        }}>
        <View alignItems="center">
          <Image
            style={{
              width: 80,
              height: 80,
              marginTop: 15,
            }}
            source={{
              uri:
                'https://cdn3.iconfinder.com/data/icons/brain-games/1042/Board-Games.png',
            }}
          />
        </View>
        <View
          flexDirection="row"
          backgroundColor="#e1e1e1"
          borderRadius={13}
          height={50}
          paddingHorizontal={10}
          marginTop={15}>
          <TextInput
            flex={1}
            style={{color: 'grey', fontSize: 18}}
            placeholder="사용자 검색"
          />
          <TouchableOpacity onPress={test}>
            <View height="100%" alignItems="center" justifyContent="center">
              <Ionicons name="ios-search" size={28} color="grey" />
            </View>
          </TouchableOpacity>
        </View>
        <MyProfileContainer />
        <TouchableOpacity>
          <View
            marginTop={15}
            height={50}
            justifyContent="center"
            alignItems="center"
            backgroundColor="#5383E8"
            borderRadius={13}>
            <Text style={{fontSize: 16, color: 'white'}}>게임 성적 보기 ></Text>
          </View>
        </TouchableOpacity>
        <View marginTop={15}>
          <Text style={styles.subtitle}>즐겨찾기</Text>
        </View>

        <MatchContainer victory={false} />
        <MatchContainer victory={true} />
      </View>
    );
  }
}

const styles = {
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
};
