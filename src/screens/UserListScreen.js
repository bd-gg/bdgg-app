import React, { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { FloatingButton } from '~/components/FloatingButton';
import UserSearchEntry from '~/components/UserSearchEntry';

function UserListScreen(props) {
  console.log('UserListScreen is called');

  let data = props.list;
  console.log(data);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
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
