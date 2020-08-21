import React from 'react';
import styled from 'styled-components';
import { GroupList } from '~/containers/GroupList';

const Container = styled.SafeAreaView`
    flex: 1;
    `;

export function GroupListScreen() {
    return (
        <Container>
            <GroupList />
        </Container>
    );
}

