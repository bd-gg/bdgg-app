import React, { useState } from 'react';
import { GroupListScreen } from './GroupListScreen';

import { FloatingButton, AddButton } from '~/components/FloatingButton';
import styled from 'styled-components';
import TextInputContainer2 from '~/components/TextInputOption';
import { connect } from 'react-redux';

const Container = styled.SafeAreaView`
    flex: 1;
    `;

function AddGroupInputLayout(props) {
    console.log(`TEST`, props)
    const [name, setName] = useState("");
    function callBack(text) {
        props.addGroup(text);
    }

    return (
    <Container>
        <TextInputContainer2 icon="ios-trophy" hint="test" setName={setName}></TextInputContainer2>
        <AddButton onPress={()=>{callBack(name)},props.hide}/>
    </Container>
    );
}

function AddGroupLayout() {
    const [showInput, setShowInput] = useState(false);
    return (
        <Container>
            <FloatingButton onPress={() => setShowInput(true)}/>
            {showInput && <AddGroupInputLayout hide={()=>setShowInput(false)} />}
        </Container>
    );
}

export function GroupScreen() {
    return (
      <Container>
        <GroupListScreen />
        <AddGroupLayout />
      </Container>
       );
}

function mapStateToProps(state) {
  return { 
        groupList: state.groupList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addGroup: (image, name, place, members) => dispatch({ type: 'ADD_GROUP', image, name, place, members }),
    removeGroup: (index) => dispatch({ type: 'REMOVE_GROUP', index }),
  };
}

Con = connect(mapStateToProps, mapDispatchToProps)(AddGroupInputLayout);

export default  Con;
