import React, { useState } from 'react';
import GroupListScreen from './GroupListScreen';

import { FloatingButton, AddButton } from '~/components/FloatingButton';
import styled from 'styled-components';
import TextInputContainer from '~/components/TextInputOption';

interface Props {}


const Container = styled.SafeAreaView`
    flex: 1;
    `;

const GroupLayout = ({ }: Props) => {
    return (
            <GroupListScreen />
    );
}

function AddGroupInputLayout(props) {
    return (
    <Container>
        <TextInputContainer icon="ios-trophy" hint="test"></TextInputContainer>
        <AddButton onPress={props.hide} />
    </Container>
    );
}

const AddGroupLayout = ({ }: Props) => {
    const [showInput, setShowInput] = useState(false);
    return (
        <Container>
            <FloatingButton onPress={() => setShowInput(true)}/>
            {showInput && <AddGroupInputLayout hide={()=>setShowInput(false)}></AddGroupInputLayout>}
        </Container>
    );
}

export default function GroupScreen() {
    return (
      <Container>
        <GroupLayout />
        <AddGroupLayout />
      </Container>
       );
}
