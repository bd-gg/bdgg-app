import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MyProfileContainer from '~/containers/MyProfileContainer';
import MatchContainer from '~/containers/MatchContainer';
import FloatingButton from '~/components/FloatingButton';
import UserSearchScreen from '~/screens/UserSearchScreen';

export default function ProfileScreen(props) {

  const [visibleSearch, toggleSearch] = useState(false);

  return (
    <View style={styles.root}>
      <UserSearchScreen isVisible={visibleSearch} close={() => { toggleSearch(false); }} />
      <FloatingButton onPress={() => { props.navigation.navigate('MatchRegister') }} />
      <View alignItems="center" marginTop={15}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://cdn3.iconfinder.com/data/icons/brain-games/1042/Board-Games.png' }}
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
          style={{ color: 'grey', fontSize: 18 }}
          placeholder="사용자 검색"
        />
        <TouchableOpacity onPress={() => { toggleSearch(true); }}>
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
          <Text style={{ fontSize: 16, color: 'white' }}>게임 성적 보기</Text>
        </View>
      </TouchableOpacity>
      <View marginTop={15}>
        <Text style={styles.subtitle}>즐겨찾기</Text>
      </View>
      <MatchContainer victory={false} match={{ gameTitle: "도미니언", date: "2020-07-13T16:09+09:00", party: "SK2-2", location: "서울시 종로구" }} />
      <MatchContainer victory={true} match={{ gameTitle: "에버델", date: "2020-07-15T16:09+09:00", party: "SK2-2", location: "서울시 종로구" }} />

    </View>
  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: 'white', //'#f8f8f8',
    paddingHorizontal: 15,
  },
  logo: {
    width: 80,
    height: 80
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});