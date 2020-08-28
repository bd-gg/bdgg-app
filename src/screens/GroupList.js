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
            gameTitle: item.image,
            date: item.name,
            party: item.place,
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

const GroupList = (props) => {
    // [TODO]
    DATA = props.getGroup();
    console.log(`DATA: `,DATA);
    return (
        <Container>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </Container>
    );
}


function mapStateToProps(state) {
  return { 
        state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGroup: () => dispatch({type: 'GET_GROUP'}) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);



