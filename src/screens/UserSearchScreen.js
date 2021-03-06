import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OverlayViewContainer from '~/containers/OverlayViewContainer';
import { getUsersByKey } from '../api/boardgamegeek';
import UserListScreen from './UserListScreen';

export default function UserSearchScreen(props) {
  let textInput;
  const [keyData, setKeyData] = useState('');
  const [data, setData] = useState([]);

  return (
    <OverlayViewContainer
      isVisible={props.isVisible}
      close={props.close}
      onModalShow={() => {
        textInput.focus();
      }}
      onModalWillHide={() => {
        textInput.blur();
      }}
      onRequestClose={props.close}
      style={{ margin: 0 }}
    >
      <SafeAreaView flex={1}>
        <View style={styles.root}>
          <View style={styles.searchBox}>
            <TouchableOpacity onPress={props.close}>
              <View style={styles.centeredIcon}>
                <Ionicons name="ios-arrow-back" size={28} color="grey" />
              </View>
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              placeholder="3글자 이상 검색"
              ref={(ref) => {
                textInput = ref;
              }}
              onChangeText={setKeyData}
            />
            <TouchableOpacity
              onPress={() => {
                getUsersByKey(keyData, setData);
                alert('submit');
              }}
            >
              <View style={styles.centeredIcon}>
                <Ionicons name="ios-search" size={28} color="grey" />
              </View>
            </TouchableOpacity>
          </View>
          <UserListScreen list={data}></UserListScreen>
        </View>
      </SafeAreaView>
    </OverlayViewContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  searchBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    flexDirection: 'row',
    height: 46,
    marginTop: 15,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  goback: {},
  centeredIcon: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  textInput: {
    color: 'grey',
    flex: 1,
    fontSize: 16,
  },
  recent: {
    marginTop: 10,
    marginHorizontal: 15,
  },
});
