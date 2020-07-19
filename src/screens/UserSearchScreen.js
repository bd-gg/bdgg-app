import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import OverlayViewContainer from '~/containers/OverlayViewContainer';

export default function UserSearchScreen(props) {
  return (
    <OverlayViewContainer isVisible={props.isVisible} close={props.close} style={{ margin: 0 }}  >
      <View style={styles.root}>
        <View style={styles.searchBox}>
          <TouchableOpacity onPress={props.close}>
            <View style={styles.centeredIcon}>
              <Ionicons name="ios-arrow-back" size={28} color="grey" />
            </View>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="사용자 검색"
          />
          <TouchableOpacity onPress={() => { alert("submit"); }}>
            <View style={styles.centeredIcon}>
              <Ionicons name="ios-search" size={28} color="grey" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.recent}>
          <Text style={{ fontSize: 20 }}>최근 검색</Text>
          <View style={{ marginTop: 15, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "grey", fontSize: 16 }}>검색 기록이 없습니다.</Text>
          </View>
        </View>
        <View style={styles.recent}>
          <Text style={{ fontSize: 20 }}>검색 결과</Text>
          <View style={{ marginTop: 15, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "grey", fontSize: 16 }}>검색 결과가 없습니다.</Text>
          </View>
        </View>
      </View>
    </OverlayViewContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  searchBox: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    flexDirection: "row",
    height: 46,
    marginTop: 15,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  goback: {
  },
  centeredIcon: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    marginHorizontal: 8
  },
  textInput: {
    color: 'grey',
    flex: 1,
    fontSize: 16
  },
  recent: {
    marginTop: 10,
    marginHorizontal: 15,
  }
});


