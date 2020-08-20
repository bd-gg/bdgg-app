import React, { useState } from 'react';

import GroupInput from './GroupInput';
import FloatingButton from '~/components/FloatingButton'; 

interface Props {};

const AddGroup = ({ }: Props) => {
    const [showInput, setShowInput] = useState<boolean>(false);

    return (
      <>
        <FloattingButton onPress={() => setShowInput(true)} />
        {showInput && <GroupInput hideGroupInput={() => setShowInput(false)}
        />}
      </>
    );
};

export default AddGroup;
