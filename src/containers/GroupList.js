import React, { View } from 'react';
import styled from 'styled-components';

interface Props {}

const Container = styled.View`
    flex: 1;
    `;

const Title = styled.Text`
	font-size: 24px;
	font-weight: 500;
	color: palevioletred;
`;

const GroupList = ({ }: Props) => {
    return (
        <Container>
        <Title> Test </Title>
        </Container>
    );
}

export default GroupList;
