import React, { View } from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';

import MatchContainer from '~/containers/MatchContainer';

const Container = styled.View`
    flex: 1;
    `;

const Title = styled.Text`
	font-size: 24px;
	font-weight: 500;
	color: palevioletred;
`;


const renderItem = ({ item }) => (
    <MatchContainer
        victory={item.victory}
        match={{
            gameTitle: item.gameTitle,
            date: item.date,
            party: item.party,
            location: item.location,
        }}
    />
);


const DATA = [
    {
        id: '1',
        victory: true,
        gameTitle: 'Test1',
        date: '2020-07-13T16:09+09:00',
        party: 'TESTTeam',
        location: 'Seoul',
    },
    {
        id: '2',
        victory: false,
        gameTitle: 'Test2',
        date: '2020-07-20T16:09+09:00',
        party: 'TESTTeam2',
        location: 'SeongNam',
    },
]

export function GroupList(props) {
    return (
        <Container>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </Container>
    );
}

