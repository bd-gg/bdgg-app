/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TextInputContainer from '~/components/TextInputOption';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import UserSearchScreen from './UserSearchScreen';
import { addGroupInfo } from '../api/boardgamegeek';

function GroupRegisterScreen(props) {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [members, addMembers] = useState([1]);
  const [visibleSearch, setVisible] = useState(false);

  const tmpDATA = {
    image: image,
    name: name,
    members: members,
    place: place,
  };

  return (
    <View>
      <UserSearchScreen
        isVisible={visibleSearch}
        close={() => {
          setVisible(false);
        }}
      />
      <TextInputContainer
        icon={<Ionicons name={'ios-image'} style={styles.icon}></Ionicons>}
        hint="Image"
        setText={setImage}
      ></TextInputContainer>
      <TextInputContainer
        icon=<Ionicons name={'ios-person'} style={styles.icon}></Ionicons>
        hint="이름"
        setText={setName}
      ></TextInputContainer>
      <TextInputContainer
        // [TODO] Select Location icon
        icon=<Ionicons name={'ios-map'} style={styles.icon}></Ionicons>
        hint="장소"
        setText={setPlace}
      ></TextInputContainer>
      <TextInputContainer
        // [TODO] Select Groups icon
        icon=<Ionicons name={'ios-add-groups'} style={styles.icon}></Ionicons>
        hint="그룹원"
      ></TextInputContainer>
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}
      >
        <View style={styles.searchBox}>
          <View style={styles.searchLayout}>
            <Text style={{ color: 'grey', fontSize: 16 }}>사용자 검색</Text>
          </View>
          <View height="100%" alignItems="center" justifyContent="center">
            <Ionicons name="ios-search" size={28} color="grey" />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          addGroupInfo(tmpDATA, props.addGroup);
        }}
      >
        <View
          style={{
            backgroundColor: '#0175DF',
            alignItems: 'center',
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>추가</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addGroup: (group) => dispatch({ type: 'ADD_GROUP', payload: group }),
  };
}

export default connect(null, mapDispatchToProps)(GroupRegisterScreen);

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    flexDirection: 'row',
    height: 46,
    paddingHorizontal: 10,
  },
  searchLayout: {
    flex: 2,
    justifyContent: 'center',
  },
  icon: {
    color: 'grey',
    fontSize: 24,
    paddingRight: 20,
  },
});
