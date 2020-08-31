import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';

import styled from 'styled-components';
import GroupRegisterScreen from './GroupRegisterScreen';
import { FloatingButton } from '~/components/FloatingButton';
import GroupListEntry from '~/components/GroupListEntry';

import image from '~/utils/image_sample';
import UserSearchScreen from './UserSearchScreen';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Stack = createStackNavigator();

function GroupScreen(props) {
  //let getGroup = props.getGroup;
  //fetch(
    //'http://ec2-13-125-12-178.ap-northeast-2.compute.amazonaws.com:8080/users/1/groups',
    //{
      //method: 'GET',
      //headers: { 'content-type': 'application/json' },
    //}
  //)
    //.then((res) => {
      //console.log('Get group list from server!!');
      //return res.json();
    //})
    //.then((res) => {
      //console.log('res.items: ', res.items);
      //console.log(props);
      //// res.items로 넣을 경우 무한 로딩
      //getGroup(res.items);
    //})
    //.catch((err) => {
      //console.error(err);
    //});
    const test = {
        image:"exam1",
        name:"exam2",
        members:["b"],
        place:"test3"
    };

  props.getGroup(test);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Group List"
        component={GroupListScreen}
      />
      <Stack.Screen
        name="Group Register"
        component={GroupRegisterScreen}
      />

    </Stack.Navigator>
  );
}

const SampleList = [
  {
    party: '그룹 1',
    date: '2020-08-08',
    location: 'Seongnam',
    gameTitle: 'Zenga',
    members: [image[0], image[1], image[2], image[3]],
  },
  {
    party: '그룹 2',
    date: '2020-08-28',
    location: 'Seould',
    gameTitle: 'Gizmo',
    members: [image[3], image[4], image[5], image[6]],
  },
];

function GroupListScreen(props) {
  let data = props.groupList;
  if (!data) data = SampleList;
  return (
    <Container>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <GroupListEntry
              item={{
                members: item.members,
                gameTitle: item.image,
                date: item.date,
                party: item.party,
                location: item.location,
              }}
            />
          )}
        />
        <FloatingButton onPress={()=> { props.navigation.navigate('Group Register'); }} />
      </View>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    groupList: state.group.groupList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGroup: (groupList) =>
      dispatch({ type: 'GET_GROUP', payload: { groupList } }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupScreen);
