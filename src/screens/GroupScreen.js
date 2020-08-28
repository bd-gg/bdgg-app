import React from 'react';
import GroupList from './GroupList';
import AddGroupLayout from './AddGroupLayout';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.SafeAreaView`
  flex: 1;
`;

function GroupScreen(props) {
  fetch(
    'http://ec2-13-125-12-178.ap-northeast-2.compute.amazonaws.com:8080/users/1/groups',
    {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }
  )
    .then((res) => {
      console.log('Get group list from server!!');
      return res.json();
    })
    .then((res) => {
      console.log('res.items: ', res.items);
      // res.items로 넣을 경우 무한 로딩
      props.getGroup(res.items);
    })
    .catch((err) => {
      console.error(err);
    });
  return (
    <Container>
      <GroupList />
      <AddGroupLayout />
    </Container>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getGroup: (groupList) =>
      dispatch({ type: 'GET_GROUP', payload: { groupList } }),
  };
}

export default connect(null, mapDispatchToProps)(GroupScreen);
