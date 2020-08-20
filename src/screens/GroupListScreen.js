import React from 'react';
import styled from 'styled-components';
import GroupList from '~/containers/GroupList';

const Container = styled.SafeAreaView`
    flex: 1;
    `;

interface Props {}
const GroupListScreen = ({ }: Props) => {
    return (
        <Container>
            <GroupList />
        </Container>
    );
};

export default GroupListScreen;
