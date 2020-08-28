import React from 'react';
import GroupList from './GroupList';
import AddGroupLayout from './AddGroupLayout';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
  flex: 1;
`;

export default function GroupScreen() {
  return (
    <Container>
      <GroupList />
      <AddGroupLayout />
    </Container>
  );
}
