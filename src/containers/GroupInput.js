import React from 'react';

import TextInput from './TextInput';

interface Props {
    hideGroupInput: () => void;
}

const GroupInput = ({ hideGroupInput } : Props) => {
    return (
            <TextInput hideGroupInput={hideGroupInput} />
    );
};

export default GroupInput;
