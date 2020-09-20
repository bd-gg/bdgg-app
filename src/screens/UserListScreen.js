import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import { FloatingButton } from '~/components/FloatingButton';
import UserSearchEntry from '~/components/UserSearchEntry';

import image from '~/utils/image_sample';
const SampleList = [
  {
    imageUrl: image[0],
    name: 'Alice',
    id: '#asr3grd2',
  },
  {
    imageUrl: image[1],
    name: 'Bill',
    id: '#der22d3',
  },
];

function UserListScreen(props) {
  console.log('UserListScreen is called');

  let data = props.list;
  console.log(data);

  return (
    <View style={{ flex: 1 }}>
      <View height={5} />
      <FlatList
        // data={data}
        data={SampleList}
        renderItem={({ item, index }) => (
          <UserSearchEntry
            item={{
              name: item.name,
              imageUrl: item.imageUrl,
            }}
            index={index}
            onPress={(index) => {}}
            onLongPress={(index) => {
              //TODO: set index to popup
              //setPopupVisible(true);
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <FloatingButton
        onPress={() => {
          props.navigation.navigate('Group Register');
        }}
      />
    </View>
  );
}

export default UserListScreen;
