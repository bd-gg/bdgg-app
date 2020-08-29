import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default function GroupProfileImage(props) {
  const getImage = (size, pos, src) => {
    const styles = {
      height: size,
      width: size,
      borderRadius: size / 2,
      position: 'absolute',
      top: pos.top,
      bottom: pos.bottom,
      left: pos.left,
      right: pos.right,
    };
    return <Image source={{ uri: src }} style={styles} />;
  };

  const size = props.size;

  // TODO(wooyoung_choi): need to filter himself
  // const members = props.members.filter(...);
  const members = props.members;
  const participant = members.length;

  let profile = <View />;
  if (participant === 1) {
    profile = getImage(size, { top: 0, left: 0 }, members[0]);
  } else if (participant === 2) {
    profile = getImage(size, { top: 0, left: 0 }, members[0]);
  } else if (participant === 3) {
    const iconSize = size * 0.75;
    profile = [
      getImage(iconSize, { top: 0, left: 0 }, members[0]),
      getImage(iconSize, { bottom: 0, right: 0 }, members[1]),
    ];
  } else if (participant === 4) {
    const iconSize = size * 0.6;
    profile = [
      getImage(iconSize, { top: 0, left: size * 0.2 }, members[0]),
      getImage(iconSize, { bottom: 0, left: 0 }, members[1]),
      getImage(iconSize, { bottom: 0, right: 0 }, members[2]),
    ];
  } else if (participant >= 5) {
    const iconSize = size * 0.6;
    profile = [
      getImage(iconSize, { top: 0, left: 0 }, members[0]),
      getImage(iconSize, { top: 0, right: 0 }, members[1]),
      getImage(iconSize, { bottom: 0, left: 0 }, members[2]),
      getImage(iconSize, { bottom: 0, right: 0 }, members[3]),
    ];
  } else {
    // console.error("Error: No participant in chat room");
  }
  return (
    <View style={props.style} height={size} width={size} children={profile} />
  );
}

const style = StyleSheet.create({});
