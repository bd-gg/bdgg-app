import React  from 'react';
import { GroupListScreen } from './GroupListScreen';
import AddGroupLayout from './AddGroupLayout';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
    flex: 1;
    `;

export default function GroupScreen() {
    return (
      <Container>
        <GroupListScreen />
        <AddGroupLayout />
      </Container>
       );
}
