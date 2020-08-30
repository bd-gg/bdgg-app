import React, { useState } from 'react';
import { View, Text } from 'react-native';

import TextInputContainer from '~/components/TextInputOption';
import MemoOption from '~/components/MemoOption';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { connect } from 'react-redux';

function GroupRegisterScreen(props) {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [members, addMembers] = useState([]);

    const tmpDATA = {
        image:image,
        name:name,
        members:members,
        place:place
    }
    return (
      <View>
        <TextInputContainer icon="ios-image" hint="Image" setText={setImage}></TextInputContainer>
        <TextInputContainer
          icon="ios-person"
          hint="이름"
          setText={setName}
        ></TextInputContainer>
        <TextInputContainer
            // [TODO] Select Location icon
          icon="ios-map"
          hint="장소"
          setText={setPlace}
        ></TextInputContainer>
        <TextInputContainer
            // [TODO] Select Groups icon
          icon="ios-add-groups"
          hint="그룹원"
        ></TextInputContainer>
        <TouchableOpacity onPress={()=>{props.addGroup(tmpDATA)}}>
          <View
            style={{
              backgroundColor: '#0175DF',
              alignItems: 'center',
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>추가</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
}

function mapDispatchToProps(dispatch) {
  return {
    addGroup: (group) =>
      dispatch({ type: 'ADD_GROUP', payload: group }),
  };
}

export default connect(null, mapDispatchToProps)(GroupRegisterScreen);





