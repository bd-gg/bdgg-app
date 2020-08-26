import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';

import MatchContainer from '~/containers/MatchContainer';

const Container = styled.SafeAreaView`
    flex: 1;
    `;

const renderItem = ({ item }) => (
    <MatchContainer
        victory={false}
        match={{
            gameTitle: item.name,
            date: item.name,
            party: item.name,
            location: item.name,
        }}
    />
);

const DATA1 = [
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

function GroupList(props) {
    //const DATA = props.getGroup();

    return (
        <Container>
            <FlatList
                data={DATA1}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </Container>
    );
}

export function GroupListScreen(props) {
    return (
        <Container>
            <GroupList />
        </Container>
    );
}

function mapStateToProps(state) {
  return { 
        groups: state.groupList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGroup: () => dispatch({type: 'GET_GROUP'})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);



