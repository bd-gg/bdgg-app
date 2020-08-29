import React, { useState } from 'react';

import { FloatingButton, AddButton } from '~/components/FloatingButton';
import styled from 'styled-components';
import TextInputContainer2 from '~/components/TextInputOption';
import { connect } from 'react-redux';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const AddGroupInputLayout = (props) => {
  const [name, setName] = useState('');
  const callBack = (props, text) => {
    props.addGroup(text, text, text, []);
  };

  return (
    <Container>
      <TextInputContainer2
        icon="ios-trophy"
        hint="test"
        setName={setName}
      ></TextInputContainer2>
      <AddButton
        onPress={() => {
          callBack(props, name);
        }}
      />
    </Container>
  );
};

function AddGroupLayout() {
  const [showInput, setShowInput] = useState(false);
  return (
    <Container>
      <FloatingButton onPress={() => setShowInput(true)} />
      {showInput && <AddGroupInputLayout hide={() => setShowInput(false)} />}
    </Container>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addGroup: (image, name, place, members) =>
      dispatch({ type: 'ADD_GROUP', image, name, place, members }),
    removeGroup: (index) => dispatch({ type: 'REMOVE_GROUP', index }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGroupLayout);
