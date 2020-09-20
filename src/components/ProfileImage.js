import React from 'react';
import { Image, Text, View } from 'react-native';

export default function ProfileImage(props) {
  const size = props.size ? props.size : 60;
  const styles = {
    container: {
      height: size,
      width: size,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: size * 0.8,
      width: size * 0.8,
      borderRadius: size * 0.3,
    },
  };
  const placeholder = <View style={styles.image} color="grey" />;

  const source = props.source
    ? props.source
    : require('../assets/img/bdgg.png');
  const image = (
    <Image
      style={styles.image}
      source={source}
      PlaceholderContent={placeholder}
    />
  );

  return <View style={styles.container} children={image} />;
}
