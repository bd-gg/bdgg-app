import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import OverlayViewContainer from '~/containers/OverlayViewContainer';

function PopupButton(props) {
  return (
    <TouchableHighlight
      onPress={() => {
        props.onPress?.call();
        alert('Todo');
      }}
      underlayColor="#eeeeee"
      style={styles.buttonContainer}
    >
      <View style={styles.button}>
        <Text>{props.text}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default function GroupListEntryPopup(props) {
  return (
    <OverlayViewContainer
      close={props.close}
      isVisible={props.isVisible}
      onRequestClose={props.close}
      style={styles.centeredView}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Group Name</Text>
        </View>
        <PopupButton text="그룹방 상단 고정" />
        <PopupButton text="그룹방 알림 켜기" />
        <PopupButton text="나가기" />
      </View>
    </OverlayViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: 270,
  },
  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignContent: 'center',
    paddingHorizontal: 7,
    borderRadius: 10,
    flexDirection: 'row',
    height: 40,
  },
  title: {
    fontSize: 20,
  },
  titleContainer: {
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
});
